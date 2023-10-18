import axios from "axios";
import { apiUrl } from "../../constants/apiConst";

const getUsers = () => axios.get(apiUrl);


export {getUsers}