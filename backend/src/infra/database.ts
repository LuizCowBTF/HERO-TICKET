import mongoose from "mongoose"

export async function connect() {
    try {
        await mongoose.connect('mongodb+srv://user:49z5ZUbBQLDBlY9j@cluster0.keyke.mongodb.net/HeroTicket'),
        console.log("CONNECT DATABASE SUCCESS");
    }
    catch (error) {
        console.log("Connect error", error);
    }
}