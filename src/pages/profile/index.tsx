import {
  Container,
  Group,
  Text,
  Rating,
  Tabs,
  SimpleGrid,
} from '@mantine/core';
import { IconPhoto, IconRss, IconStars } from '@tabler/icons-react';
import ContentBox from '@/components/ContentBox';
import AppBar from '@/components/AppBar';
import Info from '@/components/profile/Info';
import Stats from '@/components/profile/Stats';

export default function Profile() {
  return (
    <AppBar>
      <Container>
        <ContentBox>
          <>
            <Info
              name='John Eatery'
              avatar='https://pbs.twimg.com/media/EzfTMndXMAEHeUQ?format=jpg&name=medium'
              secondaryTitle='Lorem ipsum dolor sit amet consectetur.'
            />

            <Stats
              ratingValue={3}
              visitCount='999 Visits'
              recommendCount='69 recommends'
            />

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

              <Tabs.Panel value='feed' pt='xs'>
                <SimpleGrid cols={2}>
                  <div>1</div>
                  <div>2</div>
                </SimpleGrid>
              </Tabs.Panel>

              <Tabs.Panel value='gallery' pt='xs'>
                Messages tab content
              </Tabs.Panel>

              <Tabs.Panel value='settings' pt='xs'>
                Settings tab content
              </Tabs.Panel>
            </Tabs>
          </>
        </ContentBox>
      </Container>
    </AppBar>
  );
}
