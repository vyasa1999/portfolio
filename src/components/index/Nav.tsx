import { styled } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ThemeProvider, useTheme } from '@mui/system'
import { CurrentPage } from '@/types/CurrentPage'

interface NavProps {
    CurrentPage: CurrentPage
}
export default function Nav({ CurrentPage }: NavProps) {
    const theme = useTheme();
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

    return (
        <NavTimeline position="left" sx={{
            [theme.breakpoints.down('md')]: {
                display: 'none'
            }
        }}>
            <NavTimelineItem>
                <TimelineSeparator>
                    <TimelineDot variant={CurrentPage.top ? 'outlined' : 'filled'} />
                    <TimelineConnector />
                </TimelineSeparator>
            </NavTimelineItem>
            <NavTimelineItem>
                <TimelineSeparator>
                    <TimelineDot variant={CurrentPage.workExperience ? 'outlined' : 'filled'} />
                    <TimelineConnector />
                </TimelineSeparator>
                <NavTimelineContent>Work Experience</NavTimelineContent>
            </NavTimelineItem>
            <NavTimelineItem>
                <TimelineSeparator>
                    <TimelineDot variant={CurrentPage.education ? 'outlined' : 'filled'} />
                    <TimelineConnector />
                </TimelineSeparator>
                <NavTimelineContent>Education</NavTimelineContent>
            </NavTimelineItem>
            <NavTimelineItem>
                <TimelineSeparator>
                    <TimelineDot variant={CurrentPage.aboutMe ? 'outlined' : 'filled'} />
                </TimelineSeparator>
                <NavTimelineContent>About Me</NavTimelineContent>
            </NavTimelineItem>
        </NavTimeline>
    )
}