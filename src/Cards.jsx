import Card from './Card'

const Cards = ({characters}) => {

  return (
    <div className='cardContainer'>
    {characters?.map((char)=>
    <Card key={char.id} character={char}/>
    )}
    </div>
  )
}

export default Cards