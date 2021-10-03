type PersonListProps = {
  nameList: {
    first: string
    last: string
  }[]
}

export const PersonList = ({nameList}: PersonListProps) => {
  return (
    <div>
      {nameList.map(name => {
        return (
          <h2 key={name.first+name.last}>{name.first} {name.last}</h2>
        )
      })}
    </div>
  )
}