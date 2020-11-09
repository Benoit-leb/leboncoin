import StyledMessageItem from "./StyledMessageItem";

/**
 * 
 * @param {content : String} props 
 * @param {Status : String} props 
 */
const MessageItem = (props) => {

  return(
    <StyledMessageItem>
        <div className="content">{props.item.content}</div>
        <div className="status">{props.item.status}</div>
    </StyledMessageItem>
  );
};

export default MessageItem;