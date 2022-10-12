const Item = ({ img, name, category, price, button }) => {
    return (
        <div>
            <img src={img} alt={name} style={{ width: 100}}/>
            <h1>{name}</h1>
            <h3>{category}</h3>
            <p>{price}</p>
            <button>{button}</button>
        </div>
    )
}

export default Item