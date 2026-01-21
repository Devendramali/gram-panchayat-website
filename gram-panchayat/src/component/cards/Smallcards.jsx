import React from 'react'
import { Phone } from "lucide-react"
const Smallcards = ({ data }) => {
    return (
        <>
            <div className='py-4 md:min-w-[345px] min-w-[100%] flex items-center justify-start gap-2 text-left bg-[#fff] hover:-translate-y-2 transition px-4 py-4  shadow-[0px_0px_12px_#bfbfbf]' >
                <figure className='h-20 w-20 mb-[0px] rounded-[50%] overflow-hidden'>
                    <img src={data.imgsrc} alt="" className='w-[100%] h-[100%] object-cover object-center ' />
                </figure>
                <div>
                    <h2 className='text-[18px] mb-1 font-[700]'>{data.title}</h2>
                    <p className='text-[14px]'>{data.position}</p>
                    {
                        data.contact && (

                            <div className="mt-1">
                                <p className='flex gap-2 justify-start text-[14px] font-[700] text-[#555] items-center'><Phone color="#FD7E14" size={18} />{data.contact.number} </p>
                            </div>
                        )
                    }
                </div>

            </div>

        </>
    )
}

export default Smallcards