export async function deleteDeck(deckId: String) {
    await fetch(`http://localhost:5000/decks/${deckId}`, {
      method: 'DELETE',
    });
}