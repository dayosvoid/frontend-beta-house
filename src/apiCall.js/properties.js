import { axiosInstance } from ".";

export const propertiesData = async()=>{
    try{
        const response = await axiosInstance.get('/allProperties?page=1');
        return response.data
    }catch(err){
        console.log(err)
    }
}