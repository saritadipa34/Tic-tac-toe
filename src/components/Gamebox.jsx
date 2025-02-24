import Box from "./Box"

const Gamebox=()=>{
    const arr=[1,2,3,4,5,6,7,8,9]
    return(
        <div className="flex flex-wrap wrap">
        {arr.map((i)=>{
 return <Box key={i} />
        }
        )}
        </div>
    )
}
export default Gamebox