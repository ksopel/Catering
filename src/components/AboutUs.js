import "../scss/aboutUs.scss"
import chef from "../images/chef.jpg"

function AboutUs() {
    return (
        <section>
            <div className="container">
                <div className="content__box">
                    <h1>Mistrieħ</h1>
                    <p>Illum, għeżież ħuti, qed inħabbru l-mewt ta' ħuna John, li matul ħajtu ħadem, stinka, qala' fuq wiċċu u llum m'għadux magħna. Fl-aħħar jista' jorqod mingħajr ma jqum maħsud filgħodu.


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