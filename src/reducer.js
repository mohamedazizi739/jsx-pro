
const initialstate={list:[{id:1,description:"play football",done:false,show:true},{id:2,description:"studying",done:false,show:true}]}

const reducer=(state= initialstate,{type,id,description,index,editindex,newid,newdes})=>{
 if(type==='add'){
  return({list:[...state.list,{id:id,description:description,done:false,show:true}]}) ;
  }
  else if(type==='delete') {
   let v=[...state.list]
   v.splice(index, 1)
   return{list:v}
  }else if(type=="done"){
   let v=[...state.list]
   v[index].done=!v[index].done
   return({list:v})
  }
  else if(type=='alltask'){
  return({list:[...state.list].map((obj)=>{return({...obj,show:true})})})}
  else if(type=='donetask'){
  return({list:[...state.list].map((obj)=>{return(
   obj.done? {...obj,show:true}:{...obj,show:false} 
   )})})}
  else if(type=='notdonetask'){
  return({list:[...state.list].map((obj)=>{return(
   obj.done? {...obj,show:false}:{...obj,show:true} 
   )})})}
   else if(type==='edit') {
   let v=[...state.list]
   v[editindex].id=newid
   v[editindex].description=newdes
   return{list:v}}
  // }else if(type=='notdone'){
  //  // let s=[...state.list].filter(obj=> obj.done===true)
  //  let s=[...state.list]
  //  return({list:[...state.list].filter((obj)=>{return((obj.done)==false)})})
  // }
  
 return state
}
export default reducer