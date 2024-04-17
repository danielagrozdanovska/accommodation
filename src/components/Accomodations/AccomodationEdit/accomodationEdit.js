import React from "react";
// import {Navigate, useNavigate} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// import {useHistory} from 'react-router-dom';


const AccomodationEdit = (props) => {

    const navigate = useNavigate();
    // const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: props.accomodation.name || "",
        category: props.accomodation.category || 1,
        host: props.accomodation.host ? props.accomodation.host.id : 1,
        numRooms: props.accomodation.numRooms || 0
        // name: props.accomodation.name,
        // category: props.accomodation.category,
        // host: props.accomodation.host,
        // numRooms: props.accomodation.numRooms
    })
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const id = props.accomodation.id;
        console.log('Accomodation ID:', id);
        const name = formData.name !== "" ? formData.name : props.accomodation.name;
        const category = formData.category !== "" ? formData.category : props.accomodation.category;
        const host = formData.host !== "" ? formData.host : props.accomodation.host.id;
        const numRooms = formData.numRooms !== "" ? formData.numRooms : props.accomodation.numRooms;

        // const name = formData.name;
        // const category = formData.category;
        // const host = formData.host;
        // const numRooms = formData.numRooms;

        props.onEditAccomodation(props.accomodation.id, name, category, host, numRooms);
        navigate('/accomodations');
        // history.push("/accomodations");
    }

    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Accomodation name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder={props.accomodation.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" value={formData.category} onChange={handleChange}>
                            {props.categories && props.categories.map((term) => {
                                    if(props.accomodation.category !== undefined)
                                    return <option selected={props.accomodation.category} value={term}>{term}</option>
                                    else return <option value={term}>{term}</option>
                                }
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Host</label>
                        <select name="host" className="form-control" value={formData.host} onChange={handleChange}>
                            {props.hosts.map((term) => {
                                if(props.accomodation.host !== undefined  &&
                                    props.accomodation.host.id === term.id)
                                    return <option selected={props.accomodation.host.id} value={term.id}>{term.name}</option>
                                else return <option value={term.id}>{term.name}</option>
                                }
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="numRooms">Number of Rooms</label>
                        <input type="text"
                               className="form-control"
                               id="numRooms"
                               name="numRooms"
                               placeholder={props.accomodation.numRooms}
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )


}

export default AccomodationEdit;
