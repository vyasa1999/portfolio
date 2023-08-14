import { Education } from '@/types/Education';
import RoundImage from '@/components/common/RoundImage';

import { Card, Box, Typography, Chip } from '@mui/material';

interface SchoolingProps {
    education: Education[]
}

export default function Schooling({ education }: SchoolingProps) {
    return (
        <Card>
            <Typography variant={'h4'} sx={{ ml: 1 }} color='primary'>
                Education
            </Typography>
            {education.map((school, index) => {
                return (
                    <Card key={index} sx={{ ml: 2 }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'flex-start',
                        }}>
                            <Typography variant={'h5'} sx={{ mr: 2 }}>
                                {school.school}
                            </Typography>
                            <Typography variant={'h5'} component='span' color='secondary'>
                                {school.college}
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            mr: 2
                        }}>
                            <Typography variant={'h6'}>
                                {school.degree}
                            </Typography>
                            <Typography variant={'h6'}>
                                Graduated {school.gpa}
                            </Typography>
                            <Typography variant={'h6'} color='secondary'>
                                {school.startDate} - {school.endDate}
                            </Typography>
                        </Box>
                        <Typography>
                            Courses:
                        </Typography>
                        {school.courses.map((course: string, key: number) => {
                            return(
                                <Chip key={key} label={course} sx={{ mr: 1, mb: 1 }} />
                            )
                        })}
                    </Card>
                )
            })}

        </Card>
    )
}