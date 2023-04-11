import { Container, Tabs, SimpleGrid } from '@mantine/core';
import { IconPhoto, IconRss, IconStars } from '@tabler/icons-react';
import ContentBox from '@/components/ContentBox';
import AppBar from '@/components/AppBar';
import Info from '@/components/profile/Info';
import Stats from '@/components/profile/Stats';
import Feed from '@/components/feed/Feed';
import Gallery from '@/components/gallery/Gallery';
import Reviews from '@/components/review/Reviews';

export default function Profile() {
  return (
    <AppBar title='Profile | ExploreMate'>
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
                <Feed />
              </Tabs.Panel>

              <Tabs.Panel value='gallery' pt='xs'>
                <Gallery />
              </Tabs.Panel>

              <Tabs.Panel value='settings' pt='xs'>
                <Reviews />
              </Tabs.Panel>
            </Tabs>
          </>
        </ContentBox>
      </Container>
    </AppBar>
  );
}
