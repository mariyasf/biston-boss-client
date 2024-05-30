import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner />
            <Category />
            <PopularMenu />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;