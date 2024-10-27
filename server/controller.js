import service from './service.js'
import {catchAsync} from './errorHandler.js';


export default {
    getCharacters : catchAsync(async(req, res)=>{
        const page = req.query.page ||1;
        //const { page = 1 } = req.query;
            const response = await service.getCharacter(page)
            res.status(200).json(response)
        
    }),
    charById: catchAsync(async(req, res)=>{
        const {id}= req.params
            const response = await service.getCharacterById(id)
            res.status(200).json(response)
    }),
}