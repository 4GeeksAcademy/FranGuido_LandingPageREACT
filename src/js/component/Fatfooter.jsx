import React from 'react'

const footerStyle = {
	fontSize: "16px",
    color: "#ffffff",
    fontWeight: "bold",
	background: "#737373",
    
};

const Fatfooter = () => {
    return (
        <div>
            <div class="container" style={footerStyle}>
                <footer class=" flex-wrap align-items-center py-3 my-4 border-top">
                    <div class="col-md-12 align-items-center">
                        <span class="mb-3 mb-md-0 text-body-secondary">© 2023 My Landing Page, F. G.</span>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Fatfooter
