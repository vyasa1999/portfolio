import { Typography, Chip } from "@mui/material";
import { Experience } from "@/types/Experience";

interface WorkBodyProps {
    Experience: Experience
}
export default function WorkBody({ Experience }: WorkBodyProps) {
    return (
        <>
            <Typography sx={{ mb: 1 }}>Languages:</Typography>
            {Experience.languages.map((language, key) => {
                return (
                    <Chip key={key} label={language} sx={{ mr: 1, mb: 1 }} />
                )
            })}
            <Typography sx={{ mb: 1 }}>Technologies:</Typography>
            {Experience.technologies.map((technology, key) => {
                return (
                    <Chip key={key} label={technology} sx={{ mr: 1, mb: 1 }} />
                )
            })}
            <Typography sx={{ mb: 1 }}>Responsibilities:</Typography>
            <ul style={{ marginLeft: '2rem' }}>
                {Experience.description.map((responsibility, key) => {
                    return (
                        <li key={key}>
                            <Typography>
                                {responsibility}
                            </Typography>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}