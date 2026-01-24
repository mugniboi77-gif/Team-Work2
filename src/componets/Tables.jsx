import './Tables.css'
import table1 from "../assets/table1.png"
import table2 from "../assets/table2.png"
import table3 from "../assets/table3.png"
import table4 from "../assets/table4.png"
export const Tables = () => {
  return (
    <section className='tablecontainer'>
        <h1>Shop our Bestsellers</h1><br /><br />
        <div className='tables'>
            <div className="tables1">
                <img src={table1} alt="" /><br /><br /><br />
                <p>Cooper Dining Table</p><br />
                <p>rent for <span>$15</span>/mo <br /> or buy for $359 <br /> $314</p>
            </div>
            <div className="tables1">
                <img src={table2} alt="" /><br /><br /><br />
                <p>Croft Media <br /> Console</p><br />
                <p>rent for <span>$35</span>/mo <br /> or buy for $839 <br /> $739</p>
            </div>
            <div className="tables1">
                <img src={table3} alt="" /><br /><br /><br />
                <p>Essex Dining Chair</p><br />
                <p>rent for <span>$18</span>/mo <br /> or buy for $429 <br /> $379</p>
            </div>
            <div className="tables1">
                <img src={table4} alt="" /><br /><br /><br />
                <p>Ludlow Sofa</p><br />
                <p>rent for <span>$52</span>/mo <br /> or buy for $1249 <br /> $1099</p>
            </div>
        </div><br /><br />
        <p className='notbl'>Shop All Furniture</p>
    </section>
  )
}
