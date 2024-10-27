// export const renderError = (controller)=>{
//     return (req, res, next)=>{
//         return controller(req, res, next).catch((error)=>{
//             res.render('error', {message: error.message, status: error.status || 500})
//         })
//     }
// }
export const renderError = (controller) => {
    return async (req, res, next) => {
        try {
            await controller(req, res, next);
        } catch (error) {
            res.status(error.status || 500).render('error', {
                message: error.message || 'Error inesperado',
                status: error.status || 500
            });
        }
    };
};
export const catchAsync = (controller)=>{
    return (req, res, next)=>{
        return controller(req, res, next).catch(next);
    }
};