import axios from 'axios';

const EMPLOYESS_API_BASE_URL="http://localhost:9095/api/v1/employees"

class EmployeeService{

    getEmployees(employee){
        return axios.get(EMPLOYESS_API_BASE_URL);
    }
}

export default new EmployeeService()