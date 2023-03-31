import {config} from 'dotenv'
config()

import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Deck from "./models/Deck";
import cors from "cors"


const PORT = 5000

const app = express();

app.use(cors())
app.use(express.json())

app.get("/decks",  async (req: Request, res: Response) => {
    //TODO: fetch all decks and send back to the user
    // 1. how do we fetch the decks from mongo?
    const decks = await Deck.find()
    console.log(decks)
    // 2. how do we send back the array to the ui?
    res.json(decks)

})

app.post("/decks", async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title
  })
  await newDeck.save()
  const createdDeck = await newDeck.save()
  res.json(createdDeck)

});


mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`Listetning on port ${PORT}`)
    app.listen(PORT);
  });
 