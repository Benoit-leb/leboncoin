import {list} from "./messages";

export default (req, res) => {
  const activeList = list.filter((el) => !el.deleted)
  
  return res.status(200).json({
    list: activeList
  })
};
