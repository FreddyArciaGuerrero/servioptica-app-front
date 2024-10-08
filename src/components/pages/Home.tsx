// src/components/Home.tsx
import React, { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";
import ButtonAtom from "../atoms/button";
import GridAtom from "../atoms/grid";
import TitleAtom from "../atoms/title";
import RowAtom from "../atoms/row";
import ColumnAtom from "../atoms/column";
import ContainerAtom from "../atoms/container";

const Home: React.FC = () => {
  const messageContext = useContext(MessageContext);

  const handleSendSnackMessage = () => {
    messageContext?.addMessage({
      content: "This is a Snack message!",
      type: "info",
      messageType: "snack",
    });
  };

  const handleSendAlertMessage = () => {
    messageContext?.addMessage({
      content: "This is an Alert message!",
      type: "error",
      messageType: "alert",
    });
  };

  const handleSendPopupMessage = () => {
    messageContext?.addMessage({
      content: "This is a Popup message!",
      type: "success",
      messageType: "popup",
    });
  };

  const handleSendLightboxMessage = () => {
    messageContext?.addMessage({
      content: "This is a Lightbox message!",
      type: "info",
      messageType: "lightbox",
    });
  };

  const handleSendBackdropMessage = () => {
    messageContext?.addMessage({
      content: "Loading...",
      type: "info",
      messageType: "backdrop",
    });
  };

  const handleSendDialogMessage = () => {
    messageContext?.addMessage({
      content: "This is a Dialog message!",
      type: "info",
      messageType: "dialog",
    });
  };

  return (
    <ContainerAtom>
      <TitleAtom>Home Page</TitleAtom>
      <RowAtom gap={4} style={{ flexFlow: "wrap" }}>
        <ColumnAtom flex={1} style={{minWidth: 200}}>
          <ButtonAtom variant="contained" onClick={handleSendSnackMessage}>
            Send Snack Message
          </ButtonAtom>
        </ColumnAtom>
        <ColumnAtom flex={1} style={{minWidth: 200}}>
          <ButtonAtom onClick={handleSendAlertMessage}>
            Send Alert Message
          </ButtonAtom>
        </ColumnAtom>
        <ColumnAtom flex={1} style={{minWidth: 200}}>
          <ButtonAtom onClick={handleSendPopupMessage}>
            Send Popup Message
          </ButtonAtom>
        </ColumnAtom>
        <ColumnAtom flex={1} style={{minWidth: 200}}>
          <ButtonAtom onClick={handleSendLightboxMessage}>
            Send Lightbox Message
          </ButtonAtom>
        </ColumnAtom>
        <ColumnAtom flex={1} style={{minWidth: 200}}>
          <ButtonAtom onClick={handleSendBackdropMessage}>
            Send Backdrop Message
          </ButtonAtom>
        </ColumnAtom>
        <ColumnAtom flex={1} style={{minWidth: 200}}>
          <ButtonAtom variant="outlined" onClick={handleSendDialogMessage}>
            Send Dialog Message
          </ButtonAtom>
        </ColumnAtom>
      </RowAtom>
    </ContainerAtom>
  );
};

export default Home;
