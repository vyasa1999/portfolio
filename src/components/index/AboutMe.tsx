import { Interest } from "@/types/Interest";

import {
    Card,
    Typography,
    Chip
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
interface AboutMeProps {
    interest: Interest
}
export default function AboutMe({ interest }: AboutMeProps) {
    return (
        <Card>
            <Typography variant={'h4'} sx={{ ml: 1 }} color='primary'>
                About Me
            </Typography>
            <Typography sx={{ ml: 1, mb: 1 }}>
                {interest.aboutMe}
            </Typography>
            <Typography sx={{ ml: 1, mb: 1 }}>
                Hobbies:
            </Typography>
            <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                {interest.hobbies.map((hobby, key) => {
                    return (
                        <li key={key}>
                            <Typography>
                                {hobby}
                            </Typography>
                        </li>
                    )
                })}
            </ul>
            <Typography sx={{ ml: 1, mb: 1 }}>
                Interests:
            </Typography>
            <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                {interest.interests.map((interest, key) => {
                    return (
                        <li key={key}>
                            <Typography>
                                {interest}
                            </Typography>
                        </li>
                    )
                }
                )}
            </ul>
            <Chip
                component='a'
                href={interest.linkedIn}
                icon={<LinkedInIcon />}
                label={'LinkedIn'}
                sx={{ mb: 1, ml: 1 }}
                clickable
                color='primary'
            />
        </Card >
    )
}