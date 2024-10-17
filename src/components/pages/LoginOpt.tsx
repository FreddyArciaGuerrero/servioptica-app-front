// src/components/Login.tsx
import React, { useContext, useState } from "react";
import ContainerAtom from "../atoms/container";
import { LoginOptForm } from "../organisms/formLogin/optics";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/Auth";
import { persistAppStoreAtom } from "../../store/Auth";
import { useAtom } from "jotai";
import { MessageContext } from "../../context/MessageContext";

const LoginOpt: React.FC = () => {
  const [, setAppStore] = useAtom(persistAppStoreAtom);
  const messageContext = useContext(MessageContext);

  const errorMessage = () => {
    messageContext?.addMessage({
      isOpen: true,
      content: "Usuario no autorizado",
      type: "error",
      messageType: "snack",
    });
  };

  const successMessage = () => {
    messageContext?.addMessage({
      isOpen: true,
      content: "Inicio de sesión exitoso.",
      type: 'success',
      messageType: "snack",
    });
  };

  const [, setStep] = useState(1);
  const [, setFormData] = useState<any>("");

  const navetgate = useNavigate();

  const handleLogin = (value: any) => {
    if (value)
      loginUser({ document: value.document, password: value.password }).then(
        (response) => {
          if (response.error) {
            errorMessage();
          }
          if (response.data?.access_token) {
            setAppStore({
              auth: { access_token: response.data.access_token, rol: "admin" },
              user: null,
            });
            successMessage()
            navetgate("/home-admin");
          }
        }
      );
  };

  return (
    <ContainerAtom
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: 500,
        height: "calc(100vh - 260px)",
      }}
    >
      <LoginOptForm
        setStep={setStep}
        setFormData={setFormData}
        onCallBack={handleLogin}
      />

      {/* {step === 3 && (
        <OtpCodeLightBox
          onCancelBack={() => setStep(1)}
          onCallBack={(value) => {
            console.log("onCallBack", value);
            if (value.length > 0) {
              navetgate('/home-admin')
              setStep(1);
            }
          }}
        />
      )} */}
    </ContainerAtom>
  );
};

export default LoginOpt;
