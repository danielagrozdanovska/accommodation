import React from 'react';
import {Link} from 'react-router-dom';

const AccomodationTerm = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.category}</td>
            <td scope={"col"}>{props.term.host.name}</td>
            <td scope={"col"}>{props.term.numRooms}</td>
            <td scope={"col"} className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                {/*<a title={"Edit"} className={"btn btn-danger"}*/}
                {/*   onClick={() => props.onEdit(props.term.id)}>*/}
                {/*    Edit*/}
                {/*</a>*/}
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/accomodations/edit-accomodation/${props.term.id}`}>
                    Edit
                </Link>

                {/*<a title={"Book"} className={"btn btn-danger"}*/}
                {/*   onClick={() => props.onBook(props.term.id)}>*/}
                {/*    Book*/}
                {/*</a>*/}
                <a title={"Book"} className={"btn btn-danger"}
                   onClick={() => props.onBook(props.term.id)}>
                    {props.term.numRooms === 0 ? "Not available" : "Book"}

                </a>
            </td>
        </tr>
    )
}

export default AccomodationTerm;