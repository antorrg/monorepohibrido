import style from './styles/Detail.module.css'
import {useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate} from 'react-router-dom'
import { getById, cleanState} from './redux/actions'


const Detail = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {id} = useParams()
  const character = useSelector((state)=> state.detail)

  useEffect(()=>{
    dispatch(getById(id))
    return ()=>{dispatch(cleanState())}

  },[dispatch, id])
  
 const goBack = ()=>{
    navigate(-1)
 }

  return (
    <div className={style.detailContainer}>
    <div className={style.card}>
    <p className = {style.clickableText} onClick={goBack}>🔙</p>
    <div className={style.content}>
    <ul>
      <li><strong>Nombre: </strong>{character.name}</li>
      <li><strong>Id: </strong>{character.id}</li>
      <li><strong>Tipo: </strong>{character.types}</li>
      <li><strong>Status: </strong>{character.status}</li>
      <li><strong>Genero: </strong>{character.gender}</li>
      <li><strong>Ubicacion: </strong>{character.location}</li>
      <li><strong>Origen: </strong>{character.origin}</li>
      
    </ul>
    <img src={character.image} alt='Not found' className={style.image}/>
    </div>
    </div>
   
    </div>
  )
}

export default Detail