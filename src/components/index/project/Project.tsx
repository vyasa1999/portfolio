import { Project } from "@/types/Project";
import ProjectBody from "@/components/index/project/ProjectBody";
import {
    Card,
    Typography,
} from '@mui/material';

interface ProjectsProps {
    projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
    return (
        <Card>
            <Typography variant={'h4'} sx={{ ml: 1 }} color='primary'>
                Projects
            </Typography>
            {projects.map((project, index) => {
                return (
                    <ProjectBody key={index} project={project} />
                )
            })}
        </Card>
    )
}