import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type TripDocument = Trip & Document

// class activity{
    
//     @Prop()
//     time: string

//     @Prop()
//     name: string

//     @Prop()
//     note: string
// }

@Schema({collection: 'TripPlan'})
export class Trip{
    @Prop()
    tripId: string

    @Prop()
    name: string;

    @Prop()
    day: string;

    @Prop([String])
    favoriteActivitys: string[]
}

export const TripSchema = SchemaFactory.createForClass(Trip);

