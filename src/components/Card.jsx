import '../styles/Card.css'

function Card({image, name, playRound}) {
    return (
        <div id="card-body" onClick={() => playRound(name)}>
            <img src={image}></img>
            <p>{name}</p>
        </div>
    )
}

export { Card }