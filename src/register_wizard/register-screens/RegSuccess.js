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
                    <div className="alert-wrapper">
                        <Alert severity="success">
                            <span className="alert-content">
                                {message}
                            </span>
                        </Alert>
                    </div>
                    <div className="register-choro">
                        <p>{choro}</p>
                    </div>
                    <SocialMediaLinks message="Síguenos en nuestras redes sociales:" textSize={18} fontSize={60} separation={12}/>
                </div>
            </div>
        </div>
    )
}

export default RegSuccess;