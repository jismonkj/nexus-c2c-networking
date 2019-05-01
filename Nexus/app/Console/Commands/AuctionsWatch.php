<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;
use App\Notifications\AuctionNotification;
use App\Member\Auction;
use Illuminate\Support\Facades\DB;
use App\User;


class AuctionsWatch extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'auctions:watch';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Notifies Members About Auctions';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //check for auctions that goes live on current time
        $tz = 'Asia/Kolkata';
        $timestamp = time();
        $dt = new \DateTime("now", new \DateTimeZone($tz)); //first argument "must" be a string
        $dt->setTimestamp($timestamp); //adjust the object to correct timestamp
        $amOrPm = $dt->format('a') == 'am' ? true : false;

        $auction = Auction::where('date', date('Y-m-d'))->where('time', DB::raw("time_format(CURRENT_TIME, '%h:%i')"))->where('amOrPm', $amOrPm)->get();

        $auction->count();
        if ($auction->count() > 0) {
            // Log::debug($auction[0]->title);

            //find owner and notify friends
            $profile = User::find($auction[0]->u_id)->profile;
            $username =  $profile->fname . " " . $profile->lname;

            foreach (User::find($auction[0]->u_id)->friendsOne()->get() as $friend) {
                $user = User::find($friend->id);
                Notification::send($user, new AuctionNotification($auction[0], $username, 'active'));
            }
            foreach (User::find($auction[0]->u_id)->friendsTwo()->get() as $friend) {
                $user = User::find($friend->id);
                Notification::send($user, new AuctionNotification($auction[0], $username, 'active'));
            }
        }
    }
}
