import { add } from "../messages";

export default async function addMessage({ query: { message } }, res) {
  const addnew = add(JSON.parse(message));

  if (!addnew.error) {
    res.status(200).json(addnew)
  } else {
    res.status(404).json({ message: `could not add new message` })
  }
}