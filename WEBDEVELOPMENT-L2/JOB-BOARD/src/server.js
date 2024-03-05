import axios from "axios";

const server = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000
});

export const fetchJobs = async () => {
    try{
        const response = await server.get('/jobs');
        return response.data;
    } catch(error){
        throw new Error('Error fetching data : ' +  error.message);
    }
};