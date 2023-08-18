import React from "react";
import MenuImg from '../assets/images/menuimg.jpg'
import './menu.scss'
const Menu = () => {
    return (
        <div className="menu_container">
            <div className="menu-texts">
                <h2>Our Menu</h2>
                <div className="menu-descr">
                    <p className="fisrt ">Bread Basket</p>
                    <p className="second ">Assortment of fresh baked fruit breads and muffins 5.50

                    </p>
                    <p className="fisrt ">Honey Almond Granola with Fruits
</p>
                    <p className="second ">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00

</p>
                    <p className="fisrt ">Belgian Waffle
</p>
                    <p className="second ">Vanilla flavored batter with malted flour 7.50

</p>
                    <p className="fisrt ">Scrambled eggs
</p>
                    <p className="second ">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50

</p>
                    <p className="fisrt ">Blueberry Pancakes
</p>
                    <p className="second ">With syrup, butter and lots of berries 8.50

</p>
                </div>

            </div>
            <img src={MenuImg} alt="" className="menu-img" />
        </div>
    )
}
export default Menu