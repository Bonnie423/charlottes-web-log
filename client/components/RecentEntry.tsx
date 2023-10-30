interface Props {
  id: number
  name: string
  link: string
}

const RecentEntry = ({ name, link }: Props) => {
  return (
    <div>
      <a href={link}>
        <h3>{name}</h3>
      </a>
    </div>
  )
}

export default RecentEntry
