<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appointment;
use App\Http\Resources\Appointment as AppointmentResource;
use App\Http\Resources\AppointmentCollection;

class AppointmentController extends Controller
{
    public function index()
    {
        return new AppointmentCollection(Appointment::all());
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $request->validate([
            'firs_name' => 'required|max:255',
            'last_name' => 'required',
            'phone_number' => 'required|max:15',
        ]);

        $appointment = Appointment::create($request->all());

        return (new AppointmentResource($appointment))
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
        $appointment = Appointment::findOrFail($id);
        $appointment->delete();

        return response ()->json(null,204);
    }
}
