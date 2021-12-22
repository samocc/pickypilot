import React from "react";
import Alert from "@mui/material/Alert";
import SocialMediaLinks from "../../components/social-media-links/SocialMediaLinks";

function RegSuccess(props) {
    const {title, message, choro} = props;

    return (
        <div className="register-screen">
            <div className="rs-header">{title}</div>
            <div className="rs-body">
                <div className="rs-form">
                    <div className="rs-section">
                        <Alert severity="success">
                            <span className="alert-content">
                                {message}
                            </span>
                        </Alert>
                    </div>
                    <div className="rs-section">
                        <p>{choro}</p>
                    </div>
                    <div className="rs-section extra-margin">
                        <SocialMediaLinks message="Síguenos en nuestras redes sociales:" textSize={18} fontSize={60} separation={12}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegSuccess;