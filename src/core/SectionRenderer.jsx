import React from 'react'
import Hero from '../components/Hero'
import Presentation from '../components/Presentation'
import Slider from '../components/Slider'
import Video from '../components/Video'
import MoreWorks from '../components/MoreWorks'
import QuickPresentation from '../components/QuickPresentation'
import Blogs from '../components/Blogs'

const SectionRenderer = ( {section} ) => {
  switch (section.type) {
    case 'hero':
      return <Hero {...section.data} />
  
    case 'presentation':
      return <Presentation {...section.data} />
  
    case 'slider':
      return <Slider {...section.data} />
  
    case 'video':
      return <Video {...section.data} />
  
    case 'moreWork':
      return <MoreWorks {...section.data} />
  
    case 'quickPresentation':
      return <QuickPresentation {...section.data} />
  
    case 'blogs':
      return <Blogs {...section.data} />

    default:
      return null
  }
}

export default SectionRenderer