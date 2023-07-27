import { Education } from '@/types/Education';
import RoundImage from '@/components/common/RoundImage';

import { Card, Typography } from '@mui/material';

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
                    <Card key={index} sx={{ml: 2}}>
                        <RoundImage path={school.imagePath} alt={school.school}/>
                        <Typography variant={'h5'}>
                            {school.school}
                        </Typography>
                    </Card>
                )
            })}

        </Card>
    )
}