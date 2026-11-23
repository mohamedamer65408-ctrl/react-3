import { NavLink } from "react-router";
import React from "react";

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light  p-2">
                <div class="container">
                    <NavLink class="navbar-brand" to="/">StartBootstrap</NavLink>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto align-items-center">
                            <li class="nav-item ">
                                <NavLink class="nav-link" to="/aboutpage">Features <span class="sr-only">(current)</span></NavLink>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Download</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                        <i class="fa-solid fa-comment"></i> Send Feedback
                                    </button>

                                    {/* <!-- Modal --> */}
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    ...
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>

                        </ul>


                    </div>
                </div>
            </nav>


        </div>
    )
}
export default Navbar;