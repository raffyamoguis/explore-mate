import React from 'react';
import { Container } from '@mantine/core';
import FeedCard from './FeedCard';

const Feed = () => {
  return (
    <Container size='40rem' mt='md'>
      <FeedCard
        name='John Eatery'
        content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consequatur at odio distinctio atque. Mollitia tenetur aperiam non quia veritatis!'
      />

      <FeedCard
        name='John Eatery'
        content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consequatur at odio distinctio atque. Mollitia tenetur aperiam non quia veritatis!'
      />
    </Container>
  );
};

export default Feed;
