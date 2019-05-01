<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class AuctionNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public $auction = [];
    public $username = "";
    public $type = [];
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($auction, $username, $type)
    {
        $this->auction  = $auction;
        $this->username = $username;
        $this->type = $type;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database', 'broadcast'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->line('The introduction to the notification.')
            ->action('Notification Action', url('/'))
            ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {

        switch ($this->type) {
            case 'born':
                $message = $this->username . ' created a new auction of "' . $this->auction->title . '"';
                break;
            case 'active':
                $message = $this->username . "'s ".$this->auction->title." auction has just started! JOIN";
                break;

            default:
                # code...
                break;
        }

        return [
            'auction' => $this->auction,
            'username' => $this->username,
            'message' => $message
        ];
    }
}
