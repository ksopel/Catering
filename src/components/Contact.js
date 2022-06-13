import React from "react";
import "../scss/contact.scss"
import ContactForm from "./ContactForm";


function Contact() {
    return (
        <>
            <h1 className="form__title"> Contact with us!</h1>
            <div className="container">
                <div className="form__container">
                    <div>
                        <p>Accusantium aspernatur, consequuntur eaque eveniet obcaecati ratione reprehenderit sapiente?
                            Cumque dolore eum itaque placeat! Ad at cupiditate earum eum necessitatibus quaerat qui
                            repellendus velit veritatis. Atque commodi fugiat necessitatibus nemo possimus provident
                            repudiandae sed! Doloremque eveniet exercitationem fuga sit. Autem cupiditate doloremque
                            placeat qui.
                            Accusantium aspernatur, consequuntur eaque eveniet obcaecati ratione reprehenderit sapiente?
                            Cumque dolore eum itaque placeat! Ad at cupiditate earum eum necessitatibus quaerat qui
                            repellendus velit veritatis. Atque commodi fugiat necessitatibus nemo possimus provident
                            repudiandae sed! Doloremque eveniet exercitationem fuga sit. Autem cupiditate doloremque
                            placeat qui.</p>
                            <ContactForm/>
                    </div>

                </div>

            </div>
        </>


    )
}

export default Contact;