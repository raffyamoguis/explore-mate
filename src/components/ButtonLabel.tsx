import React from 'react';
import { Flex, ActionIcon, Text } from '@mantine/core';

interface Props {
  icon: JSX.Element;
  label: string;
}
const ButtonLabel: React.FC<Props> = ({ icon, label }) => {
  return (
    <Flex align='center' gap={10}>
      <ActionIcon radius='xl' onClick={() => console.log('Button Clicked..')}>
        {icon}
      </ActionIcon>
      <Text color='gray' onClick={() => console.log('Text clicked..')}>
        {label}
      </Text>
    </Flex>
  );
};

export default ButtonLabel;
