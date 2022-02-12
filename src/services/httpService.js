import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.params = {};
axios.defaults.params['apikey'] = process.env.REACT_APP_API_KEY;

export default {
  get: axios.get
};
