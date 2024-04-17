import React, {Component} from "react";
import AccomodationTerm from "../AccomodationsTerm/accomodationTerm";
import {Link} from 'react-router-dom';
import accomodationRepository from "../../../repository/accomodationRepository";
import ReactPaginate from "react-paginate";


class Accomodations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5,
        }
    }

    render() {

        // const offset = this.state.size * this.state.page;
        // const nextPageOffset = offset * this.state.size;
        const pageCount = Math.ceil(this.props.accomodations.length / this.state.size);
        //this.state.size od gore(5)
        const accomodations = this.getAccomodationsPage();
        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Host</th>
                                <th scope={"col"}>NumRooms</th>
                            </tr>
                            </thead>
                            <tbody>
                            {accomodations}
                            </tbody>
                        </table>
                        <div className="col mb-3">
                            <div className="row">
                                <div className="col-sm-12 col-md-12">
                                    <Link className={"btn btn-block btn-dark"} to={"/accomodations/add-accomodation"}>
                                        Add new accomodation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactPaginate previousLabel={"back"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"ml-1"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}
                />
            </div>
        );
    }

    handlePageClick = (data) => {
        this.setState({
            page: data.selected
        })
    }

    getAccomodationsPage = () => {
        const offset = this.state.page * this.state.size;
        const nextPageOffset = offset + this.state.size;
        return this.props.accomodations.slice(offset, nextPageOffset).map((term) => {
            if (term.numRooms > 0) {
                return (
                    <AccomodationTerm key={term.id} term={term} onDelete={this.props.onDelete}
                                      onEdit={this.props.onEdit} onBook={this.props.onBook}/>
                );
            }
        });
    }
}

export default Accomodations;






// const Accomodations = (props) => {
//
//     return (
//         <div className={"container mm-4 mt-5"}>
//             <div className={"row"}>
//                 <div className={"table-responsive"}>
//                     <table className={"table table-striped"}>
//                         <thead>
//                         <tr>
//                             <th scope={"col"}>Name</th>
//                             <th scope={"col"}>Category</th>
//                             <th scope={"col"}>Host</th>
//                             <th scope={"col"}>NumRooms</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {props.accomodations.map((term) => {
//                             return (
//                                 <AccomodationTerm key={term.id} term={term} onDelete={props.onDelete}
//                                                   onEdit={props.onEdit} onBook={props.onBook}/>
//                             )
//                         })}
//                         </tbody>
//                     </table>
//                     <div className="col mb-3">
//                         <div className="row">
//                             <div className="col-sm-12 col-md-12">
//                                 <Link className={"btn btn-block btn-dark"} to={"/accomodations/add-accomodation"}>
//                                     Add new accomodation
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//
//                 </div>
//             </div>
//         </div>
//     );
//
// }



