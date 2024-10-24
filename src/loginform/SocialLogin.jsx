import apple from '../assets/apple.svg'
import google from '../assets/google.svg'


const SocialLogin = () => {
 return (
   <div className="social-login">
     <button className="social-button">
       <img src={google} alt="Google" className="social-icon" />
       Google
     </button>
     <button className="social-button">
       <img src={apple} alt="Apple" className="social-icon" />
       Apple
     </button>
   </div>
 )
}

export default SocialLogin;