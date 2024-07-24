import React from 'react'
import { SectionsHeader,TechniciansCart } from '../../components/index'
import img_1 from '../../assets/img/team-1.jpg'
import img_2 from '../../assets/img/team-2.jpg'
import img_3 from '../../assets/img/team-3.jpg'
import img_4 from '../../assets/img/team-4.jpg'


const Technicians = () => {
        const images = [img_1,img_2,img_3,img_4];
        const names = ['Jon Raper','Mick Som','Dali Mar','Shia Rani'];

  return (
    <>
     <SectionsHeader title={'// OUR TECHNICIANS //'} body={'Our Expert Technicianss'}/>
    
      <div className='flex flex-wrap justify-center'>
       {images.map((img,index)=>{
        return  <TechniciansCart img={img} name={names[index]}/>
       })}
      </div>
    </>
     
)
}

export default Technicians
