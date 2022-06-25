const Card = ({video:{thumbnail:{url}, title}}) => {
    return <img className='card' src={url} alt={title}/>
}

export default Card;