import AppBar from '@/components/AppBar';
import { Title, Container } from '@mantine/core';

export default function Home() {
  return (
    <AppBar title='Home | ExploreMate'>
      <Container>
        <Title>Hello World</Title>
      </Container>
    </AppBar>
  );
}
