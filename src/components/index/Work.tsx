import { Experience } from '@/types/Experience'
import { Card, Box, Chip } from '@mui/material'
import { Grid } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ThemeProvider } from '@mui/material/styles';


interface WorkProps {
    experiences: Experience[]
}

export default function Work({ experiences }: WorkProps) {
    return (
        <Grid container spacing={2} sx={{ ml: 2 }}>
            <Grid item xs={8} md={10}>
                <Card>
                    {experiences.map((experience) => {
                        return (
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={experience.title + '-content'}
                                    id={experience.title + '-header'}
                                    key={experience.title}>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        width: '100%'
                                    }}>
                                        <Typography variant={'h6'}>{experience.title} - {experience.company}</Typography>
                                        <Typography>{experience.startDate} - {experience.endDate}</Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ mb: 1 }}>Languages:</Typography>
                                    {experience.languages.map((language) => {
                                        return (
                                            <Chip label={language} sx={{ mr: 1, mb: 1 }} />
                                        )
                                    })}
                                    <Typography sx={{ mb: 1 }}>Technologies:</Typography>
                                    {experience.technologies.map((technology) => {
                                        return (
                                            <Chip label={technology} sx={{ mr: 1, mb: 1 }} />
                                        )
                                    })}
                                    <Typography sx={{ mb: 1 }}>Responsibilities:</Typography>
                                    <ul style={{marginLeft: '2rem'}}>
                                        {experience.description.map((responsibility) => {
                                            return (
                                                <li>
                                                    <Typography>
                                                        {responsibility}
                                                    </Typography>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                </Card>
            </Grid>
        </Grid>
    )
}