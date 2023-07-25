import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { styled } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Title from '@/components/index/Title'
import { CurrentPage } from '@/types/CurrentPage'
import Nav from '@/components/index/Nav'
import { Experience } from '@/types/Experience'
import Work from '@/components/index/Work'
const inter = Inter({ subsets: ['latin'] })
const theme = createTheme({
  typography: {
    fontFamily: 'monospace',
  },
  palette: {
    primary: {
      main: '#ff0088'
    },
    mode: 'dark'
  }
});
const CurrentPage: CurrentPage = {
  top: false,
  education: false,
  workExperience: false,
  aboutMe: false
}
const Experiences: Experience[] = [
  {
    title: 'Full Stack Developer',
    company: 'Positive Behavior Supports Corp.',
    location: 'Stuart, FL',
    startDate: 'August 2021',
    endDate: 'Present',
    description: [
      'Building React SharePoint Framework solutions, used by thousands of employees',
      'Managing the public website, built on legacy .NET Framework, written in HTML, CSS, JavaScript and C#',
      'Writing SQL stored procedures and functions to analyze employee performance',
      'Work in a fast-paced team environment requiring quick learning and problem-solving skills'
    ],
    languages: [
      'C#',
      'JavaScript',
      'TypeScript',
      'SQL',
      'HTML'
    ],
    technologies: [
      'React',
      'SharePoint Framework',
      '.NET'
    ]
  },
  {
    title: 'Web Developer',
    company: 'Candle LLC',
    location: 'Gainesville, FL',
    startDate: 'December 2020',
    endDate: 'Present',
    description: [
      'Test',
      'test2'
    ],
    languages: [
      'C#',
      'JavaScript',
      'HTML'
    ],
    technologies: [
      '.NET',
      'Blazor',
      'MVC'
    ]
  }
]
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
        <Nav CurrentPage={CurrentPage} />
        <Title />
        <ThemeProvider theme={theme}>
          <Work experiences={Experiences} />
        </ThemeProvider>
        <div style={{ height: '100vh' }}></div>
      </main>
    </>

  )
}
