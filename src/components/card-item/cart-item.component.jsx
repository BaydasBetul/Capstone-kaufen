import './card-item.styles.scss';


const CardItem = ({cardItem}) => {
    const { name } = cardItem;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}


export default CardItem;