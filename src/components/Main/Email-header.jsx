import ActionsIcons from "./Action-icons"
import DateInfo from "./Date-info"
import EmailInfo from "./Email-info"
import './Main-CSS/Email-header.css'

function EmailHeader() {
    return (

        <header className="email-content--header">

            <div className="avatar"></div>

            <EmailInfo />

            <DateInfo />

            <ActionsIcons />

        </header>
    )
}

export default EmailHeader