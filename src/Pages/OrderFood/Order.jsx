import { useState } from "react";
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['salad', 'pizza','dessert', 'soup',  'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);

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

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            
            <Cover
                bgUrl={'/public/shop/banner2.jpg'}
                title={"Order Food"}
                description="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veritatis suscipit quisquam unde quia, voluptas tempora maxime necessitatibus temporibus! Eligendi."
            />

            <Tabs
                className="my-20"
                defaultIndex={initialIndex}
                onSelect={(index) => setTabIndex(index)}
            >

                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Drink</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab menu={salad} />
                </TabPanel>
                <TabPanel>
                    <OrderTab menu={pizza} />
                </TabPanel>
                <TabPanel>
                    <OrderTab menu={dessert} />
                </TabPanel>
                <TabPanel>
                    <OrderTab menu={soup} />
                </TabPanel>
                <TabPanel>
                    <OrderTab menu={drinks} />
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;