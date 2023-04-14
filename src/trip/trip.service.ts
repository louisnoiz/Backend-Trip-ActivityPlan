import { Injectable } from '@nestjs/common';
import { TripRepository } from './trip.repository';
import { Trip } from './trip.schema';
import { randomUUID } from 'crypto';

@Injectable()
export class TripService {
    constructor(private readonly tripRepository: TripRepository){}

    async getTripById(tripId: string): Promise<Trip> {
        return this.tripRepository.findOne({ tripId })
    }

    async getTrips(): Promise<Trip[]> {
        return this.tripRepository.find({});
    }

    async createTrip(name: string, day: string): Promise<Trip> {
        return this.tripRepository.create({
            tripId: randomUUID(),
            name,
            day,
            favoriteActivitys: []
        })
    }

    // async updateTrip(tripId: string, tripUpdates: UpdateTripDto): Promise<Trip> {
    //     return this.tripRepository.findOneAndUpdate({ tripId }, tripUpdates);
    // }
}
