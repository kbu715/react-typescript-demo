import { Name } from "./Person.types"

type PersonListProps = {
  nameList: Name[]
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