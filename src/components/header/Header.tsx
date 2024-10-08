import React, { FC } from 'react'
import styles from './header.module.css'
interface HearderInterface{
    menu: any;
    onMessage: (msg:string)=>void;
}

const Header:FC<HearderInterface> = ({menu,onMessage}) => {

  return (
    <div className={styles.header_container}>
    <div>Header</div>
    {
        menu.map((m:any,i:number)=>(
            <div key={i}>
                <article>Page Name : {m.name}</article>

                <article>Page URL : {m.link}</article>
            </div>
        ))
    }
    <button onClick={()=>onMessage('Hello from Header')}>Click</button>
    </div>
  )
}

export default Header