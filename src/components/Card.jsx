import React from 'react';
import { FaRegFileArchive } from "react-icons/fa";
import { MdCloudDownload } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    
      <motion.div drag dragConstraints={reference} whileHover={{ scale: 1.2 }} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/70 text-white px-5 py-8 overflow-hidden'>
        <FaRegFileArchive />
        <p className='text-sm leading-sm mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 py-3 mb-5'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600  rounded-full flex items-center justify-center'>
                  {data.close ? <IoMdCloseCircle /> : <MdCloudDownload size="0.9em" color='#fff' />}
                  </span>
            </div>
        {
          data.tag.isOpen ? (
            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
        </div> 
          ): null
        }
       
        </div>
      </motion.div>
    
  )
}

export default Card
