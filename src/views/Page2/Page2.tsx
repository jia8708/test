import Show1 from "./show1"
import Show2 from "./show2"

export default function View(){
    return (
        <>
            {localStorage.getItem('username') === 'aa' ? <Show1/>:<Show2/>}        
        </>
    )
}