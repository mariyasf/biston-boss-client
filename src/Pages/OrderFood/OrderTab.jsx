import FoodCard from "../../Components/FoodCard/FoodCard";


const OrderTab = ({menu}) => {
    return (
        <div className="grid md:grid-cols-3 gap-5">
            {
                menu.map(
                    item =>
                        <FoodCard
                            item={item}
                            key={item._id}
                        />
                )
            }
        </div>
    );
};

export default OrderTab;