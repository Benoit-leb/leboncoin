
export default async function messageHandler({ query: { id } }, res) {
  const result = await fetch("http://localhost:3000/api/messages/list")
  const data = await result.json();
  const filtered = data.messages.filter((m) => m.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Message with id: ${id} not found.` })
  }
}