import Card from './Card'
import './Card.css'
import staffList1 from './staffList1'

function cardComponent(staff, i) {
    return <Card
        key={staff.key}
        avatar={staff.avatar}
        name={staff.name}
        position={staff.position}
        Author={staff.Author}
    />
}
function CardList1() {
    return (
        <div className='row'>
            {staffList1.map(cardComponent)}
        </div>
    )

}

export default CardList1