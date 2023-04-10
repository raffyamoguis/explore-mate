import React from 'react';
import {
  Card,
  Group,
  Text,
  Menu,
  ActionIcon,
  Image,
  SimpleGrid,
  rem,
  Button,
  Flex,
} from '@mantine/core';
import {
  IconDots,
  IconEye,
  IconFileZip,
  IconHeart,
  IconMessageCircle,
  IconMessageCircle2,
  IconTrash,
} from '@tabler/icons-react';
import ButtonLabel from '../ButtonLabel';

const images = [
  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
  'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
  'https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
];

interface Props {
  name: string;
  content: string;
}

const FeedCard: React.FC<Props> = ({ name, content }) => {
  return (
    <Card shadow='lg' radius='lg' mb='sm'>
      <Card.Section withBorder inheritPadding py='xs'>
        <Group position='apart'>
          <Text weight={500}>{name}</Text>
          <Menu withinPortal position='bottom-end' shadow='sm'>
            <Menu.Target>
              <ActionIcon>
                <IconDots size='1rem' />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item icon={<IconFileZip size={rem(14)} />}>
                Download zip
              </Menu.Item>
              <Menu.Item icon={<IconEye size={rem(14)} />}>
                Preview all
              </Menu.Item>
              <Menu.Item icon={<IconTrash size={rem(14)} />} color='red'>
                Delete all
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>

      <Text mt='sm' color='dimmed' size='sm'>
        {content}
      </Text>

      <Card.Section mt='sm'>
        <Image
          alt='Image'
          src='https://images.unsplash.com/photo-1579263477001-7a703f1974e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
        />
      </Card.Section>

      <Card.Section inheritPadding mt='sm' pb='md'>
        <SimpleGrid cols={3}>
          {images.map((image) => (
            <Image alt='Image' src={image} key={image} radius='sm' />
          ))}
        </SimpleGrid>
      </Card.Section>

      <Group position='center' spacing={200} mt='md'>
        <ButtonLabel icon={<IconHeart />} label='2k' />
        <ButtonLabel icon={<IconMessageCircle />} label='20k' />
      </Group>
    </Card>
  );
};

export default FeedCard;
