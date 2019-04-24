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
        $path = Auth::id()."/covers/";
        $rPath = $this->storeFile($file, $path);
        if($rPath){
            $data = ['type'=>'cover', 'refid'=>Auth::id()];
            if(!$this->updateDb($data, $rPath)){
                $rPath = 0;
            }
        }
        return json_encode($rPath);
    }
    //collect images for items
    public function itemImagesCollect(Request $request)
    {
        $file = $request->file('image');
        $refid = "x-".$request->x_token;

        if(FileStore::where('type', 'items')->where('refid', $refid)->count() > 3){
            return 0;
        }

        $path = "items/".Auth::id()."/";
        $rPath = $this->storeFile($file, $path);
        if($rPath){
            $data = ['type'=>'items', 'refid'=>$refid];

            if(!$this->updateDb($data, $rPath)){
                return 0;
            }
        }
        return 1;
    }
    //collect and store images
    public function collectFiles(Request $request)
    {
        $type = $request->type;
        $file = $request->file('file');
        $refid = $type."-".$request->x_token;
        if($refid == ""){
            return 0;
        }
        if(FileStore::where('type', $type)->where('refid', $refid)->count() > 3){
            return 0;
        }

        $path = Auth::id()."/".$type."/";
        $rPath = $this->storeFile($file, $path);
        if($rPath){
            $data = ['type'=> $type, 'refid'=>$refid];

            if(!$this->updateDb($data, $rPath)){
                return 0;
            }
        }
        return 1;
    }

    //get image url
    public static function getImageUrl($type, $refid)
    {
        $path = "";
        // $type = $request->type;'
        $file = FileStore::where('refid', $refid)->where('type', $type)->get();

        if($file->count()){
            $path = $file[0]->path;
        }
        return $path;
    }
    //store images
    private function storeFile($file, $path){
        return $file->store($path);
    }
    //update db with the path to file store
    private function updateDb($data, $path){
        $result = "";
        switch($data['type']){
            case 'cover':
                $result = FileStore::updateOrCreate($data, ['path'=>$path]);
            break;
            case 'avatar':
                $result = FileStore::updateOrCreate($data, ['path'=>$path]);
            break;
            case 'items':
            case 'auctions':
                $data['path'] = $path;
                $result = FileStore::create($data);
            break;
            default:
            return 0;
        }
        return $result;
    }
}   
