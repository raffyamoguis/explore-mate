import {
  Container,
  Title,
  Box,
  Group,
  Avatar,
  Text,
  ActionIcon,
  Rating,
  Tabs,
} from '@mantine/core';
import AppBar from '@/components/AppBar';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconPhoto,
  IconRss,
  IconStars,
} from '@tabler/icons-react';

export default function Profile() {
  return (
    <AppBar>
      <Container>
        <Box
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : '#FFFFFF',
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: 'pointer',
          })}
        >
          <Group position='center' spacing={60}>
            <Avatar
              src='https://pbs.twimg.com/media/EzfTMndXMAEHeUQ?format=jpg&name=medium'
              size='xl'
              radius='xl'
            />
            <div>
              <Title>John Eatery</Title>
              <Text>Lorem ipsum dolor sit amet consectetur.</Text>
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

          <Group position='center' mt={40}>
            <Rating defaultValue={5} />
            <Text>100 People visited here</Text>
            <Text>69 Recommends</Text>
          </Group>

          <Tabs color='cyan' defaultValue='feed' mt='md'>
            <Tabs.List position='center'>
              <Tabs.Tab value='feed' icon={<IconRss size='0.8rem' />}>
                Feed
              </Tabs.Tab>
              <Tabs.Tab value='gallery' icon={<IconPhoto size='0.8rem' />}>
                Gallery
              </Tabs.Tab>
              <Tabs.Tab value='settings' icon={<IconStars size='0.8rem' />}>
                Review
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value='gallery' pt='xs'>
              Gallery tab content
            </Tabs.Panel>

            <Tabs.Panel value='messages' pt='xs'>
              Messages tab content
            </Tabs.Panel>

            <Tabs.Panel value='settings' pt='xs'>
              Settings tab content
            </Tabs.Panel>
          </Tabs>
        </Box>
      </Container>
    </AppBar>
  );
}
