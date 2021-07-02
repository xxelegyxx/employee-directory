import axios from "axios";

export default {
    getAllEmployees: function() {
        return axios.get("https://randomuser.me/api/");
    },
    getEmployeeLocal: function(location) {
        return axios.get("https://randomuser.me/api/?nat=" + location)

    }
}