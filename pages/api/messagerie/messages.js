const list = [
  {
    "id":"0",
    "content":"Bonjour à tous",
    "status":"public",
    "deleted":0
  },
  {
    "id":"1",
    "content":"Bonjour Que pensez vous de Benoit ?",
    "status":"public",
    "deleted":0
  },
  {
    "id": "2",
    "content":"Moi, j'aime bien, il a un profil intéressant!",
    "status":"public",
    "deleted":0
  },
  {
    "id": "3",
    "content":"On le rencontre ?",
    "status":"public",
    "deleted":0
  },
  {
    "id": "4",
    "content":"Je suis pour",
    "status": "public",
    "deleted":0
   },
  {
    "id": "5",
    "content":"moi aussi",
    "status":"public",
    "deleted":0
  },
  {
    "id": "6",
    "content":"J'étais de cet avis",
    "status":"public",
    "deleted":0
  },
  {
    "id": "7",
    "content": "Et vous pensez quoi de son test ? ",
    "status":"public",
    "deleted":0
  },
  {
    "id": "8",
    "content":"ceci est le dernier message",
    "status":"public",
    "deleted":0
  }
];

/**
 * 
 * @param {
 *  "content":String,
 *  "status":"public"/"private",} item
 */
const add = (item) => {
  item.id = list.length;
  item.deleted = 0;
  list.push(item);
  return {error: false, list}
}
/**
 * pass deleted state to an item to deleted
 * @param {number} id 
 */
const remove = (id) => {
  const item = (list.filter((el) => id === el.id))[0];
  const idx = item.indexOf(item);
  list[idx].deleted = 1;
  return { error: false, list }
}

export default {list};
export {
  list,
  add,
  remove
}