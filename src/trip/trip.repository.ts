import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Trip, TripDocument } from "./trip.schema";
import { FilterQuery, Model } from "mongoose";

@Injectable()
export class TripRepository {
    constructor(@InjectModel(Trip.name) private tripModel: Model<TripDocument>){}

    async findOne(tripFilterQuery: FilterQuery<Trip>): Promise<Trip>{
        return this.tripModel.findOne(tripFilterQuery);
    }

    async find(tripFilterQuery: FilterQuery<Trip>): Promise<Trip[]>{
        return this.tripModel.find(tripFilterQuery);
    }

    async create(trip: any){
        const newTrip = new this.tripModel(trip);
        return newTrip.save()
    }

    async findOneAndUpdate(tripFilterQuery: FilterQuery<Trip>, trip: Partial<Trip>): Promise<Trip> {
        return this.tripModel.findOneAndUpdate(tripFilterQuery, trip, { new: true });
    }
}