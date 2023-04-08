import React from 'react';
import { Title, Group, Avatar, Text, ActionIcon } from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from '@tabler/icons-react';

interface Props {
  name: string;
  avatar: string;
  secondaryTitle: string;
}

const Info: React.FC<Props> = ({ name, avatar, secondaryTitle }) => {
  return (
    <Group position='center' spacing={60}>
      <Avatar src={avatar} size='xl' radius='xl' />
      <div>
        <Title>{name}</Title>
        <Text>{secondaryTitle}</Text>
      </div>
      <Group spacing='md'>
        <ActionIcon color='cyan' variant='filled' size='lg' radius='xl'>
          <IconBrandFacebook />
        </ActionIcon>
        <ActionIcon color='cyan' variant='filled' size='lg' radius='xl'>
          <IconBrandInstagram />
        </ActionIcon>
        <ActionIcon color='cyan' variant='filled' size='lg' radius='xl'>
          <IconBrandTwitter />
        </ActionIcon>
      </Group>
    </Group>
  );
};

export default Info;
