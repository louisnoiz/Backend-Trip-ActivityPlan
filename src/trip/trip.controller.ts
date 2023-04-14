import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TripService } from './trip.service';
import { Trip } from './trip.schema';
import { CreateTripDto } from './dto/trip.dto';

@Controller('trip')
export class TripController {
    constructor(private readonly tripService: TripService){}

    @Get(':tripId')
  async getTripById(@Param('tripId') tripId: string): Promise<Trip> {
    return this.tripService.getTripById(tripId);
  }

  @Get()
  async getTrips(): Promise<Trip[]> {
      return this.tripService.getTrips();
  }

  @Post()
  async createTrip(@Body() createTripDto: CreateTripDto): Promise<Trip> {
      return this.tripService.createTrip(createTripDto.name, createTripDto.day)
  }

//   @Patch(':tripId')
//   async updateTrip(@Param('tripId') tripId: string, @Body() updateTripDto: UpdateTripDto): Promise<Trip> {
//       return this.tripService.updateTrip(tripId, updateTripDto);
//   }
}
