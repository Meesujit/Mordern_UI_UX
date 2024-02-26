import React from 'react'
import { card } from '../assets'
import styles, {layout} from '../style'
import Button from './Button'
const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}> 
      <h2>Find a better card deal</h2>
      <br className="sm:block hidden" />
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus asperiores, minima officiis omnis ducimus molestias ipsam, ipsum consequatur unde voluptate accusamus.</p>
      <Button styles='mt-10' />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%] ' />

      </div>

    </section>
  )


export default CardDeal