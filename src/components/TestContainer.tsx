'use client'

import React from "react";
import {
  Box,
  BoxProps,
  createStylesContext,
  useMultiStyleConfig,
  useStyles,
} from "@chakra-ui/react";

type Themable = {
  size?: string,
  variant?: string,
  colorScheme?: string,
}

export function TestContainer(props: BoxProps & Themable) {
  const { size, variant, colorScheme, children, ...rest } = props;

  // 2. Consume the `useMultiStyleConfig` hook
  const styles = useMultiStyleConfig("TestContainer", { size, variant, colorScheme });
  const [StylesProvider] = createStylesContext("TestContainer");

  return (
    <Box __css={styles.testContainer} {...rest}>
      {/* 3. Mount the computed styles on `StylesProvider` */}
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Box>
  );
}

export function TestChildren({ ...props }: BoxProps): JSX.Element {
  const styles = useStyles();
  return <Box __css={styles.testChildren} {...props} />;
}
