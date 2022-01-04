import backArrow from '../../assets/icons/back-arrow.png'
import downloadButton from '../../assets/icons/download-button.png'

import rubbishButton from '../../assets/icons/rubbish-bin-delete-button.png'
import './Main-CSS/Email-toolbar-icon.css'

function IconList() {
    return (
        <ul>
            <li>
                <img className="icon" src={backArrow} alt="reply button" />
            </li>
            <li>
                <img className="icon" src={downloadButton} alt="archive button" />
            </li>
            <li>
                <img className="icon" src={rubbishButton} alt="delete button" />
            </li>
        </ul>
    )
}
export default IconList