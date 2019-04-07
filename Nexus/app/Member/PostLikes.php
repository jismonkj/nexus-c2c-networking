<?php

namespace App\Member;

use Illuminate\Database\Eloquent\Model;

class PostLikes extends Model
{
    protected $fillable = ['item_id', 'user_id'];
    // protected $primaryKey = ['item_id', 'user_id'];
    protected $table = 'post_likes';

    public function item(){
        return $this->belongsTo('App\Member\Items', 'item_id');
    }
}
