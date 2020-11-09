import React, {useState, useEffect} from "react";
import axios from "axios";
import MessageItem from "../../components/MessageItem";
import FormWithToggle from "../../components/formWithToggle";
import StyledMessagerie from "./StyledMessagerie";

const Messagerie = (props) => {
  const [list, setList] = useState(props.data.list);
  const [messages, setMessages] = useState([]);

  //scroll to last message
  useEffect(() => {
    const objDiv = document.getElementById("container");
    objDiv.scrollTop = objDiv.scrollHeight;
  }, [messages]);
  
  // set all messages
  useEffect(() => {
    const items = [];
    if (list) {
      list.map((el, key) => {
        items.push(<MessageItem item={el} key={key} />);
      });
      setMessages(items);
    }
  }, [list])

  // set new message to API
  const addMessage = async({message, status}) => {
    const result = await axios.post(`/api/messagerie/add/{
      "content": "${message}",
      "status": "${status ? "private" : "public"}"
    }`);
    setList(result.data.list);
  };

  return (
    <React.Fragment>
      <StyledMessagerie>
        <div id="container">
          <div className="container">
            {messages}
          </div>
        </div>
        <FormWithToggle onClick={addMessage}/>
      </StyledMessagerie>
    </React.Fragment>
  );
};

export async function getStaticProps(context) {
  try {
    const res = await fetch("http://localhost:3000/api/messagerie")
    const data = await res.json()

    return {
      props: { data, error: false },
    }
  } catch (err) {
    console.log("err :", err);
    return {
      props: { error: true },
    }
  }
}

export default Messagerie;
