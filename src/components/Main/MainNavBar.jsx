import EmailNumber from "./email-number"
import IconList from "./IconList"
import './Main-CSS/Email-toolbar.css'

function MainNavBar() {
    return (
        <nav className="email-toolbar">

            <IconList />

            <div className="space"></div>

            <EmailNumber />

        </nav>
    )
}

export default MainNavBar