import { useState } from "react";
import ToggleButton from "react-toggle-button";
import StyledButton from "../../styles/StyledButton";

const formWithToggle = (props) => {

  const [status, setstatus] = useState(false);
  const [message, setMessage] = useState("");

  // submit new message
  // clear state
  const submitMessage = (evt) => {
    evt.preventDefault();
    props.onClick({message, status});
    setMessage("");
    setstatus(false);
  };

  return (
    <form onSubmit={submitMessage}>
    <div className="row middle-xs between-xs">
      <div className="col-xs-5">
        <label>
          Votre message :
        </label>
      </div>
      <div className="col-xs-7">
        <div>
          <div className=" row middle-xs end-xs">
              <div className="status">statut private  : </div>
            <ToggleButton
              inactiveLabel="off"
              activeLabel="on"
              value={status}
              onToggle={(status) => {
                setstatus(!status)
              }} />
          </div>
        </div>
      </div>
    </div>
    <StyledButton.textarea placeholder="votre message" name="message" value={message} onChange={(el) => setMessage(el.target.value)} />
    <StyledButton.primary type="submit" value="Envoyer" className="js-test-submit"/>
  </form>
  );

};

export default formWithToggle;