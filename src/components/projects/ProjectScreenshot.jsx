import { useState } from 'react'
import ProjectCover from './ProjectCover'

export default function ProjectScreenshot({ project, screenshot, showPhone = false }) {
  const [failedImage, setFailedImage] = useState(null)
  const [failedPhone, setFailedPhone] = useState(null)
  const hasImage = screenshot?.src && failedImage !== screenshot.src
  const isMobile = screenshot?.type === 'mobile'

  return (
    <div className="absolute inset-0 overflow-hidden bg-radial from-surface to-surface-soft">
      {hasImage ? (
        <img
          src={screenshot.src}
          alt={`${project.title} — ${screenshot.label}`}
          className={`size-full ${isMobile ? 'object-contain' : 'object-cover object-top'}`}
          onError={() => setFailedImage(screenshot.src)}
        />
      ) : <ProjectCover project={project} />}
      {hasImage && showPhone && !isMobile && screenshot.src === project.image && project.mobileImage && failedPhone !== project.mobileImage && (
        <div aria-hidden="true" className="absolute right-[7%] bottom-[-10%] h-[91%] w-[18%] max-w-[200px] rotate-5 overflow-hidden rounded-[clamp(8px,1.4vw,20px)] border-[3px] border-device bg-device-screen shadow-card-hover sm:border-[5px]">
          <img src={project.mobileImage} alt="" className="size-full object-cover object-top" onError={() => setFailedPhone(project.mobileImage)} />
          <span className="absolute top-0 left-1/4 h-1.5 w-1/2 rounded-b-md bg-device" />
        </div>
      )}
    </div>
  )
}
