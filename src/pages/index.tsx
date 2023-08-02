import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import { Grid, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
import Work from '@/components/index/work/Work'
import { Education } from '@/types/Education'
import Schooling from '@/components/index/Schooling'
import { Project } from '@/types/Project'
import Projects from '@/components/index/project/Project';
import { Interest } from '@/types/Interest'
import AboutMe from '@/components/index/AboutMe';
const inter = Inter({ subsets: ['latin'] })
const theme = createTheme({
  typography: {
    fontFamily: 'monospace',
  },
  palette: {
    primary: {
      main: '#ff0088'
    },
    secondary: {
      main: '#808080'
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
      'Work in a fast-paced team environment requiring quick learning and problem-solving skills',
      'Learn on the job -- I came in with zero experience in SharePoint, SQL or React and created meaningful solutions within the first two months'
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
      'Create features within a SCRUM workflow and deliver products on a sprint-basis',
      'Work on a team of two developers to prioritize tasks and collaborate effectively',
      'Meet frequently with the CEO to discuss product features and design in layman\'s terms',
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
  },
  {
    title: 'Research Assistant',
    company: 'SmartSystemsLab - University of Florida',
    location: 'Gainesville, FL',
    startDate: 'January 2020',
    endDate: 'December 2020',
    description: [
      'Build a Security Engine that can be implemented on many different IP\'s without major restructuring or redesign',
      'Independently research different bus architectures such as AMBA CHI and AXI',
      'Learn how to digest high level concepts without guidance from a teacher or other mentor'
    ],
    languages: [
      'VHDL',
    ],
    technologies: [
      'Vivado',
      'Xilinx',
      'FPGA'
    ]
  },
  {
    title: 'Prototyping Intern',
    company: 'The Tech Toybox',
    location: 'Gainesville, FL',
    startDate: 'January 2019',
    endDate: 'May 2019',
    description: [
      'Brainstorm and create prototypes for clients',
      'Manufacturing and assembly of prototypes using 3D printers, laser cutters, and other tools',
      'Learn how to use new tools and software quickly and efficiently'
    ],
    languages: [
    ],
    technologies: [
      '3D Printing',
      'Laser Cutting',
      'Control Systems',
      'Surface-Mount Soldering'
    ]
  }
]

const Education: Education[] = [{
  school: 'University of Florida',
  college: 'Herbert Wertheim College of Engineering',
  degree: 'Bachelor of Science in Computer Engineering',
  startDate: 'August 2017',
  endDate: 'August 2020',
  gpa: "3.23",
  courses: ['Data Structures and Algorithms', 'Operating Systems', 'Digital Design', 'Fundamentals of Machine Learning', 'User Experience Design', 'Software Engineering', 'Digital Logic', 'Circuits']
}];

const Project: Project[] = [
  {
    name: 'This Website',
    description: 'My personal website and portfolio to display my work and experience, deployed on Vercel.',
    languages: ['TypeScript'],
    technologies: ['Next.js', 'React', 'Material UI', 'Vercel'],
    github: 'https://github.com/vyasa1999/portfolio'
  },
  {
    name: 'Automatic Speech Recognition',
    description: 'A speech recognition system that I trained using my own voice with a dataset of 100 words and 5 samples per word. Achieved a 93% accuracy on the test set.',
    languages: ['Python'],
    technologies: ['TensorFlow', 'Keras', 'Librosa', 'NumPy', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/vyasa1999/ASR'
  },
  {
    name: 'Street Sign Detection',
    description: 'A street sign detection cnn model created for \'Fundamentals of Machine Learning\' course. Achieved a 87% accuracy on the test set.',
    languages: ['Python'],
    technologies: ['PyTorch', 'NumPy', 'Pandas', 'Matplotlib'],
    github: null
  },
  {
    name: 'Emotion in Voice',
    description: 'A emotion detection model created for \'Introduction to Machine Learning\' course. Achieved a 92% accuracy on the test set.',
    languages: ['Python'],
    technologies: ['TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Matplotlib'],
    github: null
  }
]
const Interest: Interest = {
  aboutMe: `I am a 24 year old Indian-American who's lived all around the world. My dad worked for the U.S. State Department so as a result I've lived in Manila, Philippines, Sarajevo, Bosnia and Herzegovina, and Tokyo, Japan. Everywhere I go I bring a piece of those cultures with me and I love to share my experiences with others. I currently live in Palm Beach Gardens, Florida, and take full advantage of my accessibility to water sports. I am currently working as a Full Stack Developer at Positive Behavior Supports Corp. I am passionate about learning new technologies and building meaningful solutions to real-world problems. I am a quick learner and I am always looking for new opportunities to grow and develop my skills.`,
  hobbies: ['Snowboarding', 'Wakeboarding', 'Travelling', 'Muay Thai', 'Cooking', 'Playing Video Games', 'Building Models'],
  interests: ['My Bearded Dragon named Yoshi', 'Anime', 'Computers', 'Machine Learning/Ai'],
  linkedIn: 'https://www.linkedin.com/in/ash-vyas-098aa8178/'
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
        <Title />
        <ThemeProvider theme={theme}>
          <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Work experiences={Experiences} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Schooling education={Education} />
                <Box style={{ height: '1rem' }}></Box>
                <AboutMe interest={Interest} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Projects projects={Project} />
              </Grid>
            </Grid>
          </div>
        </ThemeProvider>
        <div style={{ height: '100vh' }}></div>
      </main>
    </>

  )
}
