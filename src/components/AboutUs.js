import "../scss/aboutUs.scss"
import chef from "../images/chef.jpg"

function AboutUs() {
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
                </div>
                <div className="content__image">
                    <img src={chef} alt=""/>
                </div>
            </div>
        </section>
    )
}
export default AboutUs;