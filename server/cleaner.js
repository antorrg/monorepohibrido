
const infoCleaner = (info, isObject)=>{
    return isObject? cleaner(info) : info.map((infodata)=> cleaner(infodata))
}

const cleaner = (data)=>{
    return {
        id: data.id,
        name:data.name,
        status:data.status || 'unknown',
        origin:data.origin.name || 'unknown',
        location: data.location.name || 'unknown',
        type: data.type || 'unknown',
        species:data.species || 'unknown',
        gender:data.gender || 'unknown',
        image:data.image,
    }
}
export default infoCleaner