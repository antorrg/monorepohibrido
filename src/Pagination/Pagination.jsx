import style from './Pagination.module.css'

const Pagination = ({page, setPage, totalPages}) => {
  
  const lowDisable = (page===1)? true : false
  const highDisable = (page===totalPages)? true : false

  return (
    <div className={style.pagination}>
    <button onClick={()=>{setPage(1)}} disabled={lowDisable} className={style.buttonL}>Primera</button>
    <button onClick={()=>{setPage(page - 1)}} disabled={lowDisable} className={style.buttonL}>Anterior</button>
    <strong>Page {page} from {totalPages}</strong>
    <button onClick={()=>{setPage(page + 1)}} disabled={highDisable}className={style.buttonR}>Siguiente</button>
    <button onClick={()=>{setPage(totalPages)}} disabled={highDisable} className={style.buttonR}>Ultima</button>
  </div>
  )
}

export default Pagination