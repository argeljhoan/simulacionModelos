import React from 'react'
import DataTable from 'react-data-table-component'
import { useEffect,useState } from 'react';
import "../css/Table.css"
import 'styled-components'

const Table = ({arrayResult}) => {
    console.log("Table");
    // 


    const [data, setData] = useState([]);
    

    const verificar = () => {
        if(arrayResult.length !== 0){
            setData(arrayResult)
            console.log(data);
        }else{
            console.log("ELSE");
            console.log(arrayResult);
        }
    }

    useEffect(() => {
        
        verificar()
      }, [data])
   


    const columns = [
     {
            name: 'Id',
            selector: (row) => row.id,
      },
      {
        name: ' λ',
        selector: (row) => row.landa,
      },
      {
        name: ' μ',
        selector: (row) => row.miu,
      },
      {
        name: ' K',
        selector: (row) => row.capacidad,
      },
      

       {
         name: 'Ro(P)',
         selector: (row) => row.p,
      },
      {
       name: '(Po)',
       selector: (row) => row.probabilidad,
      },
      ,
      {
       name: '(L)',
       selector: (row) => row.L,
      }
      ,
      {
       name: '(Lq)',
       selector: (row) => row.Lq,
      },
      {
       name: '(W)',
       selector: (row) => row.W,
      },
      {
       name: '(Wq)',
       selector: (row) => row.Wq,
      }
     ];
    // console.log(columns);
  return (
    <div >

        <div className='table'>
        
         <DataTable
         columns={columns}
         data={data}/> 
        
    </div>
    </div>
  )
}

export default Table