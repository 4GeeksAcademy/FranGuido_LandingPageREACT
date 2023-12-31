import React from "react";

const navbarStyle = {
	fontSize: "20px",
    color: "black",
	background: "#f5f5f5",
    
};


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary pt-3" style={navbarStyle}>
            <div class="container-fluid">
                <a class="navbar-brand text-dark" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class=" navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>

    )
};

export default Navbar;

