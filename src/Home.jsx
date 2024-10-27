import {useState, useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { getCharacters} from './redux/actions'
import Cards from './Cards'
import Pagination from './Pagination/Pagination'


const Home = () => {
  const dispatch = useDispatch()
  //const navigate = useNavigate()
  const character = useSelector((state)=> state.characters)
  const totalPages = useSelector((state)=> state.totalPages)
  const pageApi= useSelector((state)=> state.currentPage)
  const guide = pageApi? pageApi : 1;
  const [page, setPage]= useState(Number(guide))


  useEffect(()=>{
    dispatch(getCharacters(page))

  },[dispatch,page])
  const url= import.meta.env.VITE_URL;

  return (
    <div>
    <a className='button' href={`${url}`}>Portada</a>
    <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
    <Cards characters={character}/>
    </div>
  )
}

export default Home