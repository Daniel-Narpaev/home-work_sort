import "./List.css"

const List = ({ nameInp, ageInp }) => {
  return (
    <div className="listBlock">
            <p className="title">{nameInp}({ageInp} years old)</p>
    </div>
  )
}

export default List
