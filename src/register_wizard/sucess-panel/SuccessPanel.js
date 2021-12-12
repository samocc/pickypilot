import './SucessPanel.scss'
import Alert from "@mui/material/Alert";
import React from "react";
import SocialMediaLinks from "../../components/social-media-links/SocialMediaLinks";

function SuccessPanel(props) {
    const { message } = props;

    return (
        <div className="success-panel">
            <div className="alert-wrapper">
                <Alert severity="success">
                        <span className="alert-content">
                            {message}
                        </span>
                </Alert>
            </div>
            <div className="register-choro">
                <p>
                    Choro choro oadijaiedaoijifa oiafjae oifjeai foaeij
                    djaeifja oaijdfiae foaeijfea oaijfiae ofijaeif foaiejfea foeiajf
                    Choro choro oadijaiedaoijifa oiafjae oifjeai foaeij
                    djaeifja oaijdfiae foaeijfea oaijfiae ofijaeif foaiejfea foeiajf
                    Choro choro oadijaiedaoijifa oiafjae oifjeai foaeij
                    djaeifja oaijdfiae foaeijfea oaijfiae ofijaeif foaiejfea foeiajf
                    Choro choro oadijaiedaoijifa oiafjae oifjeai foaeij
                    djaeifja oaijdfiae foaeijfea oaijfiae ofijaeif foaiejfea foeiajf
                    Choro choro oadijaiedaoijifa oiafjae oifjeai foaeij
                    djaeifja oaijdfiae foaeijfea oaijfiae ofijaeif foaiejfea foeiajf
                </p>
            </div>
            <div className="links-wrapper">
                <SocialMediaLinks message="Síguenos en nuestras redes sociales:" textSize={18} fontSize={60} separation={12}/>
            </div>
        </div>
    )
}

export default SuccessPanel;