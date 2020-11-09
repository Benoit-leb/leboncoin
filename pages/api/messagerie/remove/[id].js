import { remove } from "../messages";

export default async function removeMessage({ query: { id } }, res) {
  const removeMess = remove(id);

  if (!removeMess.error) {
    res.status(200).json(removeMess)
  } else {
    res.status(404).json({ message: `could not remove new message` })
  }
}