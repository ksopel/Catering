import "../scss/menu.scss"
import DailyMeals from "../data/dailyMeals";

function Menu(props) {
    props = DailyMeals;

    return (
        <div className="container__all">
            {(props.map((item) => {
                    return (
                        <div className="container__menu" key={item.id}>
                            <h2>{item.day}</h2>
                            <h3>{item.name}</h3>
                            <p className="container__description"> Opis dania: {item.description}</p>
                            <p className="container__price">Cena: {item.price} zł</p>
                        </div>
                    )
                }
            ))}
        </div>

    )
}

export default Menu;