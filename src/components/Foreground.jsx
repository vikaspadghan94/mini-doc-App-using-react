import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

  let ref = useRef(null);

    const data = [
      {
        desc:"This is new Paragraph of card first", filesize:".9Mb", close: false, tag: {isOpen:true, tagTitle:"download now", tagColor:"green" }
    },
    {
      desc:"This is new Paragraph of card first", filesize:".9Mb", close: true, tag: {isOpen:true, tagTitle:"download now", tagColor:"blue" }
  },
  {
    desc:"This is new Paragraph of card first", filesize:".9Mb", close: true, tag: {isOpen:false, tagTitle:"upload", tagColor:"green" }
},
  ]
  return (
    <>
    <div ref={ref} className=' fixed top-0 left-0 z-[3] w-full h-full  flex gap-10 flex-wrap p-5'>
    {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
    ))}
    </div>
    </>
  )
}

export default Foreground
