import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/student';

// this BASE_URL for SpringBoot backend appliction
// const BASE_URL = 'http://localhost:8080/sms/api/student'; // this is ULR of standalone tomcat server
//check URL match to the tomcat server port also

// this BASE_URL for NodeJS backend application(using http module)
// const BASE_URL = 'http://localhost:5000'; 

// this BASE_URL for Express backend application(using http module)
//const BASE_URL = 'http://localhost:5000/api/student'; 

const fetchAllStudent = () => {
    return axios.get(BASE_URL);
}

const deleteByPrimaryKey = (rollno) => {
    return axios.delete(BASE_URL + "/" + rollno);
}

const updateStudentByRollNo = (s) => {
    return axios.put(BASE_URL + "/" + s.rollno, s);
}

const createNewStudent = (s) => {
    return axios.post(BASE_URL, s);
}
export {
    fetchAllStudent,
    deleteByPrimaryKey,
    updateStudentByRollNo,
    createNewStudent
}