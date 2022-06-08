import React from "react";
import "../scss/contact.scss"


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
                        <form>
                            <label htmlFor="text">Imię</label>
                            <input type="text" id="text"/>

                            <label htmlFor="text">Nazwisko</label>
                            <input type="text" id="text"/>

                            <label htmlFor="email">Podaj email</label>
                            <input type="email" id="email"/>

                            <label htmlFor="textarea">Czym chcesz się z nami podzielić</label>
                            <textarea id="textarea"></textarea>

                            <button type="submit">Wyślij</button>
                        </form>
                    </div>

                </div>

            </div>
        </>


    )
}

export default Contact;