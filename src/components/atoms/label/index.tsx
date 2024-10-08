import { ReactElement } from "react";
import styled from "styled-components";
import './style.css'

export type LabelAtomProps = {
  children: React.ReactNode;
  htmlFor?: string;
  important?: boolean;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
};

const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #1D2029;
  margin-bottom: 8px;
`
const Span = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1em;
  color: #D82F39;
  margin-left: 4px;
`

export const LabelAtom = ({
  htmlFor,
  children,
  important=false,
  style,
  className,
  disabled,
}: LabelAtomProps): ReactElement => {
  return (
    <Label htmlFor={htmlFor ?? ""} style={style} className={`LabelAtom ${className} ${disabled ? 'disabled' : ''}`}>
      {children}{important ? <Span>*</Span> : ''}
    </Label>
  );
};

export default LabelAtom;