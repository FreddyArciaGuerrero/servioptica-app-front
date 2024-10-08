// src/components/Home.tsx
import React, { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";
import ButtonAtom from "../atoms/button";
import TitleAtom from "../atoms/title";
import RowAtom from "../atoms/row";
import ColumnAtom from "../atoms/column";
import ContainerAtom from "../atoms/container";
import { FormModule } from "../molecules/form";
import testGroupData from '../molecules/form/data/testGroupData.json'

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
        <ColumnAtom flex={1} style={{ minWidth: 200 }}>
          <ButtonAtom variant="contained" onClick={handleSendSnackMessage}>
            Send Snack
          </ButtonAtom>
        </ColumnAtom>
        <ColumnAtom flex={1} style={{ minWidth: 200 }}>
          <ButtonAtom onClick={handleSendAlertMessage}>
            Send Alert
          </ButtonAtom>
        </ColumnAtom>
        <ColumnAtom flex={1} style={{ minWidth: 200 }}>
          <ButtonAtom onClick={handleSendPopupMessage}>
            Send Popup
          </ButtonAtom>
        </ColumnAtom>
        <ColumnAtom flex={1} style={{ minWidth: 200 }}>
          <ButtonAtom onClick={handleSendLightboxMessage}>
            Send Lightbox
          </ButtonAtom>
        </ColumnAtom>
        <ColumnAtom flex={1} style={{ minWidth: 200 }}>
          <ButtonAtom onClick={handleSendBackdropMessage}>
            Send Backdrop
          </ButtonAtom>
        </ColumnAtom>
        <ColumnAtom flex={1} style={{ minWidth: 200 }}>
          <ButtonAtom variant="outlined" onClick={handleSendDialogMessage}>
            Send Dialog
          </ButtonAtom>
        </ColumnAtom>
      </RowAtom>
      <FormModule
        onCallBack={(value) => console.log(value)}
        onGoBackCallBack={() => {}}
        actionBtnLabel="Continual"
        groupsFields={testGroupData}
      />
    </ContainerAtom>
  );
};

export default Home;
