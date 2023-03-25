import Image from 'next/image'
import data from '../public/skills-data.json'

interface ProjectData {
  titre: string
  lien: string
}

interface SkillData {
  skill: string
  image: string
  description: string
  projets: ProjectData[]
  category: string
}

interface SkillCardProps {
  skill: string
  setContainerSize: (size: string) => void
  setSelected: (selected: string) => void
}

export default function SkillCard(props: SkillCardProps) {
  const skillsData: SkillData[] = data
  const skillData: SkillData | undefined = skillsData.find((item) => item.skill === props.skill)

  if (!skillData) {
    return null
  }

  const { category, image, description, projets } = skillData

  return (
    <div className="competences-text">
      <Image
        className="img-card"
        src={image}
        onClick={() => {
          props.setContainerSize('')
          props.setSelected(category)
        }}
        alt="Skill Logo"
        width={100}
        height={100}
      />
      {description !== '' && <p>{description}</p>}
      {projets[0].titre !== '' && (
        <div className="competences-text-projets">
          <p>Projets (github) → </p>
          <ul>
            {projets.map(({ titre, lien }) => (
              <li key={titre}>
                <a href={lien} target="_blank">
                  {titre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
