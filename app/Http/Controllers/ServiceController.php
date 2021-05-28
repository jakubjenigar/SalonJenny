<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use App\Http\Resources\Service as ServiceResource;
use App\Http\Resources\ServiceCollection;

class ServiceController extends Controller
{

    public function index()
    {
        return new ServiceCollection(Service::all());
    }

    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $request->validate([
           'service_name' => 'required|max:255',
        ]);

        $service = Service::create($request->all());

        return (new ServiceResource($service))
            ->response()
            ->setStatusCode(201);
    }

    public function show($id)
    {
        return new ServiceResource(Service::findOrFail($id));
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
        $service = Service::findOrFail($id);
        $service->delete();

        return response()->json(null, 204);
    }
}
