import React from 'react';
import Head from 'next/head';
import {
  AppShell,
  Header,
  Group,
  Text,
  Button,
  Container,
} from '@mantine/core';

interface Props {
  title?: string;
  children: JSX.Element;
}

const AppBar: React.FC<Props> = ({ title = 'ExploreMate', children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <AppShell
        padding='md'
        header={
          <Header height={60} p='xs' withBorder>
            <Container size='lg'>
              <Group
                position='right'
                spacing='xl'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <Text>Login</Text>
                <Text>Explore</Text>
                <Text>About</Text>
                <Button>Start</Button>
              </Group>
            </Container>
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {children}
      </AppShell>
    </>
  );
};

export default AppBar;
