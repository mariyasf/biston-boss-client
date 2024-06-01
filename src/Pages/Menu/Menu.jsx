
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory';

const Menu = () => {
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
            <Helmet>
                <title>Bistro Boos | Menu</title>
            </Helmet>
            
            <Cover
                bgUrl={"/menu/banner3.jpg"}
                title={"Our Menu"}
                description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maxime tenetur dicta perspiciatis voluptatum quisquam blanditiis tempora, ipsam molestiae nam."}

            />
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"Today's Offer"}
            />
            <MenuCategory menu={offered} />
            <MenuCategory
                menu={dessert}
                bgUrl={'/public/menu/dessert-bg.jpeg'}
                title={"dessert"}
            />
            <MenuCategory
                menu={pizza}
                bgUrl={'/public/menu/pizza-bg.jpg'}
                title={"pizza"}
            />
            <MenuCategory
                menu={soup}
                bgUrl={'/public/menu/soup-bg.jpg'}
                title={"soup"}
            />
            <MenuCategory
                menu={salad}
                bgUrl={'/public/menu/salad-bg.jpg'}
                title={"salad"}
            />
            <MenuCategory
                menu={drinks}
                bgUrl={'/public/menu/dessert-bg.jpeg'}
                title={"drinks"}
            />




        </div>
    );
};

export default Menu;