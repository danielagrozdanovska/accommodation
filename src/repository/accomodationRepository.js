import axios from '../custom-axios/axios';

const AccomodationService = {
    fetchCountries: () => {
        return axios.get("/countries");
    },
    fetchHosts: () => {
        return axios.get("/hosts");
    },
    fetchAccomodations: () => {
        return axios.get("/accomodations");
    },
    fetchCategories: () => {
        return axios.get("/categories");
    },
    deleteAccomodation: (id) => {
        return axios.delete(`/accomodations/delete-accomodation/${id}`);
    },
    addAccomodation: (name, category, host, numRooms) => {
        return axios.post("/accomodations/add-accomodation", {
            "name" : name,
            "category" : category,
            "host" : host,
            "numRooms": numRooms
        });
    },
    editAccomodation: (id, name, category, host, numRooms) => {
        return axios.post(`/accomodations/edit-accomodation/${id}`, {
            "name" : name,
            "category" : category,
            "host" : host,
            "numRooms": numRooms
        });
    },
    getAccomodation: (id) => {
        return axios.get(`/accomodations/${id}`);
    },
    bookAccomodation: (id) => {
        return axios.post(`/accomodations/book/${id}`);
    }
}
///delete-accomodation/{id}

export default AccomodationService;