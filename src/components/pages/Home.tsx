// src/components/Home.tsx
import React, { useContext } from 'react';
import { MessageContext } from '../../context/MessageContext';

const Home: React.FC = () => {
  const messageContext = useContext(MessageContext);

  const handleSendSnackMessage = () => {
    messageContext?.addMessage({
      content: 'This is a Snack message!',
      type: 'info',
      messageType: 'snack'
    });
  };

  const handleSendAlertMessage = () => {
    messageContext?.addMessage({
      content: 'This is an Alert message!',
      type: 'error',
      messageType: 'alert'
    });
  };

  const handleSendPopupMessage = () => {
    messageContext?.addMessage({
      content: 'This is a Popup message!',
      type: 'success',
      messageType: 'popup'
    });
  };

  const handleSendLightboxMessage = () => {
    messageContext?.addMessage({
      content: 'This is a Lightbox message!',
      type: 'info',
      messageType: 'lightbox'
    });
  };

  const handleSendBackdropMessage = () => {
    messageContext?.addMessage({
      content: 'Loading...',
      type: 'info',
      messageType: 'backdrop'
    });
  };

  const handleSendDialogMessage = () => {
    messageContext?.addMessage({
      content: 'This is a Dialog message!',
      type: 'info',
      messageType: 'dialog'
    });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleSendSnackMessage}>Send Snack Message</button>
      <button onClick={handleSendAlertMessage}>Send Alert Message</button>
      <button onClick={handleSendPopupMessage}>Send Popup Message</button>
      <button onClick={handleSendLightboxMessage}>Send Lightbox Message</button>
      <button onClick={handleSendBackdropMessage}>Send Backdrop Message</button>
      <button onClick={handleSendDialogMessage}>Send Dialog Message</button>
    </div>
  );
};

export default Home;
