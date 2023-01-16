export const logger =(store)=>(next)=>(action)=>{
     
        next(action);
  
};

export const featuring =(stpre)=>(next)=>(actioninfo)=>{
        console.log("Action",actioninfo);
        const featured=[{name:"pedrito"}, ...actioninfo.action.payload]
        const updateActioninfo={...actioninfo, action:{...actioninfo.action,payload:featured}};
        next(updateActioninfo);
}