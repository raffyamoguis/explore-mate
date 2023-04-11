import React from 'react';
import { Card, Flex, Avatar, Text, Rating } from '@mantine/core';

interface Props {
  name: string;
  avatar?: string;
  ratingValue: number;
  comment: string;
}

const ReviewCard: React.FC<Props> = ({
  name,
  avatar,
  ratingValue,
  comment,
}) => {
  return (
    <Card shadow='md' radius='lg' mb='sm'>
      <Flex justify='flex-start' align='center' gap='lg'>
        <Avatar src={avatar} size='lg' radius='xl' />
        <div>
          <Text fw={600}>{name}</Text>
          <Rating value={ratingValue} />
        </div>
      </Flex>
      <Text fz='sm' mt='sm'>
        {comment}
      </Text>
    </Card>
  );
};

export default ReviewCard;
