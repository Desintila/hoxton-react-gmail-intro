import SenderInfo from "./Sender-Info"
import UserInfo from "./User-info"
import './Main-CSS/Email-info.css'


function EmailInfo() {

    return (

        <div className="email-info">

            <SenderInfo />

            <UserInfo />

        </div>
    )
}

export default EmailInfo