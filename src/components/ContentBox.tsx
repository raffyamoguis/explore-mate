import React from 'react';
import { Box } from '@mantine/core';

interface Props {
  children: JSX.Element;
}

const ContentBox: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[6] : '#FFFFFF',
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: 'pointer',
      })}
    >
      {children}
    </Box>
  );
};

export default ContentBox;
