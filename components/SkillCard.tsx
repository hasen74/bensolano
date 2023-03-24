import Image from 'next/image'
import data from '../skills-data.json'

interface Skill {
  [key: string]: {
    image: string
    description: string
    projets: {
      titre: string
      lien: string
    }[]
  }
}

export default function SkillCard(props: any) {
  const skill: Skill | undefined = data.find((item) => item.hasOwnProperty(props.skill))?.[props.skill]

  if (!skill) {
    return null
  }

  const { image, description, projets } = skill

  return (
    <div className="competences-text">
      <Image
        className="competences-img img-card"
        src={image}
        onClick={() => {
          props.setIsOpen(false)
          props.setSelected('allskillsback')
        }}
        alt="Skill Logo"
        width={100}
        height={100}
      />
      <p>{description}</p>
      <p>Projets (github) → </p>
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
