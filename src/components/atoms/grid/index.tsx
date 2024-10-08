import Grid from "@mui/material/Grid2";
import { GridAtomProps } from "./type";
import useWindowSize from "@/hooks/useWindowSize";

export const GridAtom = ({
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
}: Partial<GridAtomProps>) => {
  const { width } = useWindowSize();

  const determinePadding = () => {
    if (width >= 1200 && p_lg) return p_lg;
    if (width >= 992 && p_md) return p_md;
    if (width >= 768 && p_sm) return p_sm;
    if (width < 768 && p_xs) return p_xs;
    return p;
  };
  return (
    <Grid
      spacing={gap ?? 0}
      p={determinePadding()}
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
      m={m ?? 0}
      container
      direction={direction ?? "column"}
      justifyContent={justifyContent ?? "flex-start"}
      alignItems={alignItems ?? "flex-start"}
      className={className}
      style={style}
    >
      {children}
    </Grid>
  );
};

export default GridAtom;
