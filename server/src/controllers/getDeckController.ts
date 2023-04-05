import { Request, Response } from "express";
import Deck from "../models/Deck";
import { ObjectId } from "mongodb"

export async function getDeckController(req: Request, res: Response) {
  const { deckId } = req.params;
  const deck = await Deck.findById(new ObjectId(deckId));
  res.json(deck);
}