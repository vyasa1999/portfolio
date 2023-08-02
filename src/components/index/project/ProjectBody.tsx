import { Project } from "@/types/Project";

import {
    Card,
    Typography,
    Chip,
    Divider
} from "@mui/material";

import GitHubIcon from '@mui/icons-material/GitHub';

interface ProjectBodyProps {
    project: Project
}

export default function ProjectBody({ project }: ProjectBodyProps) {
    return (
        <Card sx={{ ml: 1 }}>
            <Typography variant='h6' sx={{ mb: 1 }}>
                {project.name}
            </Typography>
            <Typography sx={{ mb: 1 }}> Languages: </Typography>
            {project.languages.map((language, key) => {
                return (
                    <Chip key={key} label={language} sx={{ mr: 1, mb: 1 }} />
                )
            })}
            <Typography> Technologies: </Typography>
            {project.technologies.map((technology, key) => {
                return (
                    <Chip key={key} label={technology} sx={{ mr: 1, mb: 1 }} />
                )
            })}
            <br />
            {project.github == null ? null : (

                <Chip
                    component='a'
                    href={project.github}
                    icon={<GitHubIcon />}
                    label={'GitHub'}
                    sx={{ mb: 1 }}
                    clickable
                    color='primary'
                />
            )}
            <Typography sx={{ mb: 1 }}>
                {project.description}
            </Typography>
            <Divider />

        </Card>
    )
}