import React from 'react'

const SectionHeader = ({title, classname}) => {


  return (
    <>
     <div className="text-center">
        <h2 className={`text-[32px] font-[700] ${classname}`}>{title}</h2>
       
     </div>
    </>
  )
}

export default SectionHeader