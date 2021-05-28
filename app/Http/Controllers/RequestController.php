<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Request as RequestModel;
use App\Http\Resources\Request as RequestResource;
use App\Http\Resources\RequestCollection;

class RequestController extends Controller
{

    public function index()
    {
        return new RequestCollection(RequestModel::all());
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $request ->validate([
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'phone_number' => 'required|max:15',
        ]);

        $request = RequestModel::create($request->all());

        return (new RequestResource($request))
            ->response()
            ->setStatusCode(201);
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        $request = RequestModel::findOrFail($id);
        $request->delete();

        return response()->json(null, 204);
    }
}
