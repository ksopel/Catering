import "../scss/blurb.scss"
import delivery from "../images/delivery.jpg"
import dish from "../images/dish.jpg"
import spices from "../images/spices.jpg"

function Blurb() {
    return (
        <section>
            <div className="container blurb__boxes">
                <div className="blurb">
                    <img src={delivery} alt=""/>
                    <h2>Delivery</h2>
                    <p>Animi commodi ea, error explicabo obcaecati porro suscipit. Animi eaque facilis fuga illo
                        inventore neque nihil quas quo repellendus?</p>
                    <a href="#" className="btn btn-delivery">Kliknij tutaj!</a>
                </div>
                <div className="blurb">
                    <img src={dish} alt=""/>
                    <h2>Menu</h2>
                    <p>Animi commodi ea, error explicabo obcaecati porro suscipit. Animi eaque facilis fuga illo
                        inventore neque nihil quas quo repellendus?</p>
                    <a href="#" className="btn btn-menu">Kliknij tutaj!</a>
                </div>
                <div className="blurb">
                    <img src={spices} alt=""/>
                    <h2>Spices</h2>
                    <p>Animi commodi ea, error explicabo obcaecati porro suscipit. Animi eaque facilis fuga illo
                        inventore neque nihil quas quo repellendus?</p>
                    <a href="#" className="btn btn-spices">Kliknij tutaj!</a>
                </div>
            </div>
        </section>
    )
}
export default Blurb;