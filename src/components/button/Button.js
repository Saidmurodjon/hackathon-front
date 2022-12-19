import React from 'react'

const Button = ({ButtonFunction,name,styles ,elem={}}) => {
  return (
    <>
    <button onClick={()=>ButtonFunction(elem)} className={`hover:bg-transparent bg-[#00A59C] text-white font-semibold hover:text-[#00A59C] py-4 px-12 border-2 border-[#00A59C]  hover:border-[#00A59C] rounded-lg ${styles}`}>{name}</button>
    </>
  )
}

export default Button