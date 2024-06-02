import { useSelector,useDispatch} from "react-redux";//通过useSelector获取仓库数据

const  View=()=>{
//     //获取仓库数据
//     const {num} = useSelector((state:RootState)=>(
//         {
//             num:state.NumStatus.num
//         }
//     ))
//     //通过useDispatch修改仓库函数
// const dispatch = useDispatch()
// const changeNum=()=>{
//     dispatch({
//         type:"add2",
//         value:10
//     })
// }

// const {sarr} = useSelector((state:RootState)=>(
//     {
//         sarr:state.ArrStatus.sarr
//     }
// ))
// const changeArr=()=>{
//     dispatch({
//         type:"sarrpush",
//         value:10
//     })
// }


    return (
        <div className='home'>
            <p>Page1页面</p>
            {/* <p>{num}</p>
            <button onClick={changeNum}>按钮</button>
            <p>{sarr}</p>
            <button onClick={changeArr}>按钮</button> */}
        </div>
    );
}
export default View;