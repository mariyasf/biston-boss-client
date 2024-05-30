import { useState } from "react";
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu();

    const salad = menu.filter(item =>
        item.category === 'salad'
    )
    const drinks = menu.filter(item =>
        item.category === 'drinks'
    )
    const dessert = menu.filter(item =>
        item.category === 'dessert'
    )
    const pizza = menu.filter(item =>
        item.category === 'pizza'
    )
    const soup = menu.filter(item =>
        item.category === 'soup'
    )
    const offered = menu.filter(item =>
        item.category === 'offered'
    )

    return (
        <div>
            <Cover
                bgUrl={'/public/shop/banner2.jpg'}
                title={"Order Food"}
                description="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veritatis suscipit quisquam unde quia, voluptas tempora maxime necessitatibus temporibus! Eligendi."
            />

            <Tabs
                defaultIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
            >

                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drink</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-5">
                        {
                            salad.map(
                                item =>
                                    <FoodCard
                                        item={item}
                                        key={item._id}
                                    />
                            )
                        }
                   </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;