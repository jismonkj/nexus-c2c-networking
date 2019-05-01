<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Support\Facades\Log;

class BiddingPlaced implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $data, $highestbid, $fname, $lname;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($data, $highestbid, $fname, $lname)
    {
        Log::debug($data);
        $this->data = $data;
        $this->highestbid = $highestbid;
        $this->fname = $fname;
        $this->lname = $lname;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('auction' . $this->data['auid']);
    }
}
