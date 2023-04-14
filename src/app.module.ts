import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TripModule } from './trip/trip.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://louissarun:louis250445@demotrip.wtskfrc.mongodb.net/?retryWrites=true&w=majority'), TripModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
