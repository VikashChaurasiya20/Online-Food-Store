import {connect, ConnectOptions} from 'mongoose';
import mongoose from "mongoose";

export const dbConnect = () => {
   mongoose.connect('mongodb://localhost:27017/OnlineFoodStore', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("connect successfully"),
        (error) => console.log("Erroe Comes in this line",error)
    )
}


