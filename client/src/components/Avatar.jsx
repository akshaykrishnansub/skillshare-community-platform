import React from 'react'

const Avatar = ({name,size=40}) => {
    const getInitials=(name)=>{
        if(!name){
            return "??";
        }
        const parts=name.trim().split(" ").filter(Boolean);
        if(parts.length===1){
            return parts[0].slice(0,2).toUpperCase();
        }
        return (parts[0][0]+parts[parts.length-1][0]).toUpperCase();
    }

    const initials=getInitials(name);
  return (
    <div className='flex justify-center items-center rounded-full bg-amber-400 text-white font-bold' style={{width:size,height:size}}>
        {initials}
    </div>
  )
}

export default Avatar