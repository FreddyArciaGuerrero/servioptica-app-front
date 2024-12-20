import { BASE_COLORS } from "../../../../style/constants";
import { ColumnAtom, GridAtom, TextAtom, TitleAtom } from "../../../atoms";

export const OrderDelivery = ({ actibe }: { actibe: boolean }) => {
  return (
    <ColumnAtom className="StepOrder_Box" alignItems="center" gap={2}>
      <GridAtom
        className="StepOrder"
        style={{
          background: actibe ? BASE_COLORS.blue : "#DEDEDE",
        }}
      >
        <svg width="45.01" height="27" viewBox="0 0 45.01 27">
          <path
            id="Icon_awesome-motorcycle"
            data-name="Icon awesome-motorcycle"
            d="M36.063,13.5a8.9,8.9,0,0,0-2.981.485l-2.313-3.86h5.794A1.683,1.683,0,0,0,38.25,8.438V6.188A1.683,1.683,0,0,0,36.563,4.5H33.377a1.688,1.688,0,0,0-1.252.555L29.489,7.987l-1.6-2.672A1.7,1.7,0,0,0,26.438,4.5H20.813a1.128,1.128,0,0,0-1.125,1.125V6.75a1.128,1.128,0,0,0,1.125,1.125h4.669l1.35,2.25H16.024C14.78,8.5,12.867,7.313,9,7.313H5.1A1.712,1.712,0,0,0,3.375,9.035a1.685,1.685,0,0,0,1.688,1.652H9a3.723,3.723,0,0,1,3.361,1.744l-.795,1.441A9,9,0,1,0,17.719,24.75h5.92a1.688,1.688,0,0,0,1.688-1.765A10.651,10.651,0,0,1,29.278,14.2l.879,1.462A9,9,0,1,0,36.063,13.5ZM9,28.125a5.625,5.625,0,0,1,0-11.25,5.231,5.231,0,0,1,.879.07l-2.918,5.3a1.69,1.69,0,0,0,1.477,2.5h5.716A5.64,5.64,0,0,1,9,28.125Zm32.618-5.316A5.626,5.626,0,0,1,30.375,22.5a5.579,5.579,0,0,1,1.554-3.874L35.4,24.42a1.13,1.13,0,0,0,1.547.387l.963-.577a1.13,1.13,0,0,0,.387-1.547l-3.417-5.688A5.385,5.385,0,0,1,36,16.882a5.624,5.624,0,0,1,5.618,5.927Z"
            transform="translate(0.002 -4.5)"
            fill={actibe ? "#dbe3ff" : "#ffffff"}
          />
        </svg>
      </GridAtom>
      <GridAtom alignItems="center" gap={1}>
        <GridAtom style={{ maxWidth: 210, minHeight: 45 }}>
          <TitleAtom
            type="h3"
            style={{
              color: actibe ? BASE_COLORS.blue : "#DEDEDE",
              textAlign: "center",
              fontWeight: 900,
            }}
          >
            Pedido en proceso de entrega
          </TitleAtom>
        </GridAtom>
        <GridAtom style={{ maxWidth: 200 }}>
          <TextAtom
            style={{
              color: actibe ? BASE_COLORS.blue : "#707070",
              textAlign: "center",
              width: "100%",
            }}
          >
            01/09/2024
          </TextAtom>
        </GridAtom>
      </GridAtom>
    </ColumnAtom>
  );
};
