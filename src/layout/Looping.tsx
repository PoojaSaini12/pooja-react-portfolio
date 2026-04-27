// function Looping(){
// let n=["ravi", "shalu", "shreya", "nitiya"]
//   return(
//     <div>
//       <ul>
//         {n.map((v,i)=>{
//           return(
//           <li></li>
//           )
//         })}
//         </ul>
//     </div>
//   )
// }

// export default Looping;



function Looping(){
  let n=["ravi", "shalu", "shreya", "nitiya"]
  return(
    <div>
      <ul>
{n.map((v, i) => (
  <li key={i}>{v}</li>
))}

        </ul>
    </div>
  )
}

export default Looping;