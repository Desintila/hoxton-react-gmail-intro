import EmailActions from "./Email-action"
import EmailBody from "./Email-body"
import EmailHeader from "./Email-header"
import Title from "./title"

function EmailContent() {
    return (

        <article className="email-content">

            <Title />

            <EmailHeader />

            <EmailBody />

            <EmailActions />

        </article>
    )
}

export default EmailContent