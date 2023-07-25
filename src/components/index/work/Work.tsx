import { Experience } from '@/types/Experience'
import { Card, Box, Chip } from '@mui/material'
import { Grid } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ThemeProvider, useTheme } from '@mui/material/styles';

import WorkBody from './WorkBody'


interface WorkProps {
    experiences: Experience[]
}

export default function Work({ experiences }: WorkProps) {
    const theme = useTheme();
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
                <Card sx={{width: '90%', mr: 'auto', ml: 'auto'}}>
                    <Typography variant={'h4'} sx={{ ml: 1 }} color='primary'>
                        Work Experience
                    </Typography>
                    {experiences.map((experience, index) => {
                        return (
                            <Accordion key={index}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={experience.title + '-content'}
                                    id={experience.title + '-header'}
                                    key={experience.title}>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Typography variant={'h5'}>{experience.title}</Typography>
                                        <Typography variant={'h6'} sx={{ color: 'grey' }}>{experience.company}</Typography>
                                        <Typography sx={{ color: 'grey' }}>{experience.startDate} - {experience.endDate}</Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <WorkBody Experience={experience} />
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                </Card>
            </Grid>
        </Grid>
    )
}