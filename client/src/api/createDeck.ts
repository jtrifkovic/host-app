export async function createdDeck(title: String) {
    const response = await fetch('http://localhost:5000/decks', {
        method: 'POST',
        body: JSON.stringify({
          title,
        }),
        headers: {
          "Content-Type" : "application/JSON"
        }
      })
      return response.json()
}