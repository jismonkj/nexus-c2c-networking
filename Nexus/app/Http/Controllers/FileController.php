<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\FileStore;

class FileController extends Controller
{
    /* USER IMAGES!
    ______________________________ */
    //collect images
    public function imageCollect(Request $request){
        $file = $request->file('image');
        $path = "covers/".Auth::id()."/";
        $rPath = $this->storeFile($file, $path);
        if($rPath){
            $data = ['type'=>'cover', 'refid'=>Auth::id()];
            if(!$this->updateDb($data, $rPath)){
                $rPath = 0;
            }
        }
        return json_encode($rPath);
    }
    //get image url
    public function getImageUrl(Request $request)
    {
        $type = $request->type;
        switch($type){
            case 'cover':
                $file = FileStore::where('refid', Auth::id())->where('type', 'cover');
            break;
        }
        return $file->path;
    }
    //store images
    private function storeFile($file, $path){
        return $file->store($path);
    }

    private function updateDb($data, $path){
        switch($data['type']){
            case 'cover':
                $result = FileStore::updateOrCreate($data, ['path'=>$path]);
            break;
            default:
            return 0;
        }
        return $result;
    }
}   
