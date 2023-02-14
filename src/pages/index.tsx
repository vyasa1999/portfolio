import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import { createTheme, ThemeProvider } from '@mui/system'
import { styled } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Title from '@/components/index/Title'
const inter = Inter({ subsets: ['latin'] })
const theme = createTheme({
  typography: {
    fontFamily: 'monospace',
  },
});
const NavTimeline = styled(Timeline)<any>(({ theme }) => ({
  position: 'fixed',
  background: 'none',
  zIndex: 4,
  fontSize: '1rem',
  right: 0,
  bottom: '3rem',
}));
const NavTimelineItem = styled(TimelineItem)<any>(({ theme }) => ({
  width: '1px',
}));
const NavTimelineContent = styled(TimelineContent)<any>(({ theme }) => ({
  fontFamily: 'monospace',
  fontSize: '.75rem',
  overflowInline: 'visible',
  whiteSpace: 'nowrap',
  marginTop: '.25rem'
}));
function Nav() {
  return (
    <NavTimeline position="left">
      <NavTimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
      </NavTimelineItem>
      <NavTimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <NavTimelineContent>Languages</NavTimelineContent>
      </NavTimelineItem>
      <NavTimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <NavTimelineContent>Technologies</NavTimelineContent>
      </NavTimelineItem>
      <NavTimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <NavTimelineContent>Work Experience</NavTimelineContent>
      </NavTimelineItem>
      <NavTimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <NavTimelineContent>About Me</NavTimelineContent>
      </NavTimelineItem>
    </NavTimeline>
  )
}
export default function Home() {

  return (
    <>
      <Head>
        <title>Ash Vyas</title>
        <meta name="description" content="Ash Vyas' Portfolio and Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        <Title />
        <div style={{ height: '100vh' }}></div>
      </main>
    </>

  )
}
