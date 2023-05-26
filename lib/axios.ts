import axios from "axios";

axios.defaults.baseURL = 'https://b6de-176-100-5-98.ngrok-free.app';
axios.defaults.headers.common['ngrok-skip-browser-warning'] = '1';

export default axios;