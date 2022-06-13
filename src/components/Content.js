import "../scss/content.scss"
import food from "../images/food.jpg"
import {Link} from "react-router-dom";

function Content() {
    return (
        <section>
            <div className="container">
                <div className="content__box">
                    <h1>Delicious italian food</h1>
                    <p>Animi commodi ea, error explicabo obcaecati porro suscipit. Animi eaque facilis fuga illo
                        inventore neque nihil quas quo repellendus? Amet aspernatur aut consectetur deleniti dolores et
                        ex facilis illum inventore ipsam iusto laboriosam maiores nihil odio odit perspiciatis quaerat
                        quam quibusdam, repellat repudiandae soluta sunt temporibus tenetur voluptatem voluptatum! At
                        debitis distinctio, error expedita facere hic impedit itaque minus mollitia nam nihil officia
                        perspiciatis placeat quia, quo quod tempora unde. Accusantium aspernatur, consequuntur eaque
                        eveniet obcaecati ratione reprehenderit sapiente? Cumque dolore eum itaque placeat! Ad at
                        cupiditate earum eum necessitatibus quaerat qui repellendus velit veritatis. Atque commodi
                        fugiat necessitatibus nemo possimus provident repudiandae sed! Doloremque eveniet exercitationem
                        fuga sit. Autem cupiditate doloremque placeat qui.
                    </p>
                    <Link to="/about" className="btn btn-primary">O nas</Link>
                    <Link to="/contact" className="btn btn-secondary">Skontaktuj się z nami</Link>

                </div>
                <div className="content__image">
                    <img src={food} alt="Na zdjęciu znajdują się dania włoskie"/>
                </div>
            </div>
        </section>
    )
}
export default Content;