import { Navigate, useParams } from 'react-router'
import ProjectDetailsSection from '../components/projects/ProjectDetailsSection'
import projects from '../data/projects.json'
import { getGithubUrl } from '../utils/projectPreview'
import NotFoundPage from './NotFoundPage'

export default function ProjectDetailsPage() {
  const { projectId } = useParams()
  const project = projects.find(({ id }) => id === projectId)

  if (!project) return <NotFoundPage />
  if (getGithubUrl(project.url, window.location.origin)) return <Navigate to="/projects" replace />

  return <ProjectDetailsSection key={project.id} project={project} />
}
