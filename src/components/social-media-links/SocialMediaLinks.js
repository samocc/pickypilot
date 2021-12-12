import './SocialMediaLinks.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function SocialMediaLinks(props) {
    const {message, fontSize = 40, separation = 12, textSize = 14} = props;
    const facebookRef = '/';
    const instagramRef = '/';
    const twitterRef = '/';


    return (
        <div className="social-media-links">
            {message.length ? (
                <div className="sml-message" style={{fontSize: textSize}}>
                    {message}
                </div>
            ):null}
            <div className="sml-links">
                <a href={facebookRef} style={{marginRight: separation}}><FacebookIcon sx={{ fontSize: fontSize}}/></a>
                <a href={twitterRef} style={{marginRight: separation}}><InstagramIcon sx={{ fontSize: fontSize }}/></a>
                <a href={instagramRef} ><TwitterIcon sx={{ fontSize: fontSize }}/></a>
            </div>
        </div>
    )
}

export default SocialMediaLinks;