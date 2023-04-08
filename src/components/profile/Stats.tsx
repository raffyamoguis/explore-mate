import React from 'react';
import { Group, Rating, Text } from '@mantine/core';

interface Props {
  ratingValue: number;
  visitCount: string | number;
  recommendCount: string | number;
}

const Stats: React.FC<Props> = ({
  ratingValue,
  visitCount,
  recommendCount,
}) => {
  console.log(ratingValue);
  return (
    <Group position='center' mt={40}>
      <Rating value={ratingValue} />
      <Text>{visitCount}</Text>
      <Text>{recommendCount}</Text>
    </Group>
  );
};

export default Stats;
