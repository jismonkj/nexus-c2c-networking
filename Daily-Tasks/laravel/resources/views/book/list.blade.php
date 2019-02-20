@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Books List') }}</div>

                <div class="card-body">
                    <table class="table table-striped">
                        <thead>
                            <th>Title</th>
                            <th>Body</th>
                            <th>*</th>
                            <th>*</th>
                        </thead>
                        <tbody>
                            @isset($data)
                                @foreach($data as $row)
                                    <tr>
                                        <td>{{ $row['title'] }}</td>
                                        <td>{{ $row['body'] }}</td>
                                        <td>
                                        <a class="btn btn-sm btn-secondary" href="{{ route('book.edit', $row['id']) }}">Edit</a>
                                        </td>
                                        <td>
                                        <form action="{{ route('book.destroy', $row['id']) }}" method="POST">
                                            @csrf
                                        <input type="hidden" name="_method" value="DELETE">    
                                        <button type="submit" class="btn btn-sm btn-primary">Delete</button></form>
                                        </td>
                                    </tr>
                                @endforeach
                            @endisset
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
