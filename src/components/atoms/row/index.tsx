import Grid from "@mui/material/Grid2";
import { RowAtomProps } from "./type";
import useWindowSize from "@/hooks/useWindowSize";

export const RowAtom = ({
  children,
  style,
  direction,
  justifyContent,
  alignItems,
  m,
  p,
  pt,
  pb,
  pl,
  pr,
  p_lg,
  p_md,
  p_sm,
  p_xs,
  gap,
  className,
}: Partial<RowAtomProps>) => {
  const {width} = useWindowSize()

  const determinePadding = () => {
    if (width >= 1200 && p_lg) return p_lg;
    if (width >= 992 && p_md) return p_md;
    if (width >= 768 && p_sm) return p_sm;
    if (width < 768 && p_xs) return p_xs;
    return p; 
  };
  return (
    <Grid
      gap={gap ?? 0}
      p={determinePadding()}
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
      m={m ?? 0}
      container
      direction={direction ?? "row"}
      justifyContent={justifyContent ?? "flex-start"}
      alignItems={alignItems ?? 'stretch'}
      className={className ?? ''}
      style={style}
    >
      {children}
    </Grid>
  );
};

export default RowAtom;
