import './Flexibility.css'
import table5 from '../assets/table5.png'
import table6 from '../assets/table6.png'

export const Flexibility = () => {
  return (
    <section className='Flexibility'>
        <img className='bigmg' src={table5} alt="" />
        <div className='floyd'>
            <img src={table6} alt="" /><br /><br />
            <h1>Floyd Furniture Meets <br /> Feather Flexibility</h1><br />
            <button>Explore Floyd Furniture</button>
        </div>
    </section>
  )
}
