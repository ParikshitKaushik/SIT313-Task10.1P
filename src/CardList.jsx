import Card from './Card'
import './Card.css'
import staffList from './staffList'

function cardComponent(staff, i) {
    return <Card
        key={staff.key}
        avatar={staff.avatar}
        name={staff.name}
        position={staff.position}
        Author={staff.Author}
    />
}
function CardList() {
    return (
        <div className='row'>
            {staffList.map(cardComponent)}
        </div>
    )

}

export default CardList