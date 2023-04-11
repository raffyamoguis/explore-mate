import React from 'react';
import { Container, Center, Text } from '@mantine/core';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  return (
    <Container size='40rem' mt='md'>
      <Center>
        <Text color='yellow'>
          <Text size={30} fw={600} span>
            4.9
          </Text>{' '}
          out of 5
        </Text>
      </Center>

      <ReviewCard
        name='John Dee'
        ratingValue={4}
        comment='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea sit veniam soluta reiciendis ad optio nulla nam illo sapiente?'
      />
      <ReviewCard
        name='John Cena'
        ratingValue={5}
        comment='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea sit veniam soluta reiciendis ad optio nulla nam illo sapiente?'
      />
      <ReviewCard
        name='Hanna Lee'
        ratingValue={5}
        comment='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea sit veniam soluta reiciendis ad optio nulla nam illo sapiente?'
      />
    </Container>
  );
};

export default Reviews;
