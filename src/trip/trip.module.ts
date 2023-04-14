import { Module } from '@nestjs/common';
import { TripService } from './trip.service';
import { TripController } from './trip.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Trip, TripSchema } from './trip.schema';
import { TripRepository } from './trip.repository';

@Module({
  imports: [MongooseModule.forFeature([{name: Trip.name, schema: TripSchema}])],
  providers: [TripService, TripRepository],
  controllers: [TripController]
})
export class TripModule {}
