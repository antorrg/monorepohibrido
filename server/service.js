import axios from 'axios'
import env from './envConfig.js'
import infoCleaner from './cleaner.js'


export default {
    getCharacter : async(page)=>{
        try {
            const response = await axios(`${env.Url}?page=${page}`)
            if(!response){const error = new Error('Personajes no hallados'); error.status=404; throw error}
           
            return {
                info:{pages: response.data.info.pages,
                      currentPage: page},
                results : infoCleaner(response.data.results, false)
            }

        } catch (error) {
            throw error
        }
    },
    getCharacterById : async(id)=>{
        try {
            const response = await axios(`${env.Url}/${id}`)
            if(!response){const error = new Error('Personaje no hallado'); error.status=404; throw error}
            return infoCleaner(response.data, true)
        } catch (error) {
            throw error
        }
    }
}