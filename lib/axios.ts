import axios from "axios";

axios.defaults.baseURL = 'https://03c2-176-100-5-98.ngrok-free.app';
axios.defaults.headers.common['ngrok-skip-browser-warning'] = '1';

export default axios;