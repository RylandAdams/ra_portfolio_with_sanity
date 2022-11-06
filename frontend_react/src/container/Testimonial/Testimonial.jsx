import React, { useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight} from 'react-icons/hi'

//INTERNAL IMPORTS
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client'

import './Testimonial.scss'

const Testimonial = () => {

  const [brands, setBrands] = useState([])
  const [testimonials, setTestimonials] = useState([])
  
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';
  
    client.fetch(query)
    .then((data) => {
      setTestimonials(data);
      console.log(data)
    })

    client.fetch(brandsQuery)
    .then((data) => {
      setBrands(data);
    })
  }, [])
  
  return (
    <>
      {testimonials.lenth && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={urlFor(testimonials[currentIndex].imgurl)} alt='testimonial'/>
          </div>
        </>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg'
);