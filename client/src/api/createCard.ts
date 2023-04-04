import { API_URL } from "./config"
import { TDeck } from "./getDecks"

export async function createCard(deckId: String, text: String): Promise<TDeck> {
    const response = await fetch(`${API_URL}/decks/${deckId}/cards`, {
        method: 'POST',
        body: JSON.stringify({
          text,
        }),
        headers: {
          "Content-Type" : "application/JSON"
        }
      })
      return response.json()
}