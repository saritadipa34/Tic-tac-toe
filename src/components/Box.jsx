
const Box=({onClick,value})=>{

    return(
        <div onClick={onClick} className="h-[100px] cursor-pointer border border-black w-[100px] flex justify-center items-center bg-yellow-100">
           {value} 
        </div>
    )
}
export default Box