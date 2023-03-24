import Image from 'next/image'
import data from '../skills-data.json'

interface Skill {
  [key: string]: {
    image: string
    description: string
    projets: {
      titre: string
      lien: string
    }[],
    category: string
  }
}

export default function SkillCard(props: any) {
  const skill: Skill | undefined = data.find((item) => item.hasOwnProperty(props.skill))?.[props.skill]

  if (!skill) {
    return null
  }

  const { category, image, description, projets } = skill

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
      <p>{description}</p>
      <p className="inline">Projets (github) → </p>
      <ul>
        {projets.map(({ titre, lien }) => (
          <li key={titre}>
            <a href={lien} target="_blank">{titre}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
