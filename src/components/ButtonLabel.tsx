import React from 'react';
import { Flex, ActionIcon, Text } from '@mantine/core';

interface Props {
  icon: JSX.Element;
  label: string;
  onClick?: () => void;
}
const ButtonLabel: React.FC<Props> = ({ icon, label, ...props }) => {
  return (
    <Flex align='center' gap={10}>
      <ActionIcon radius='xl' onClick={props.onClick}>
        {icon}
      </ActionIcon>
      <Text color='gray'>{label}</Text>
    </Flex>
  );
};

export default ButtonLabel;
