import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <>
            <Carousel autoPlay infiniteLoop
                className="text-center" >
                <div>
                    <img src="/home/01.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/home/02.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/home/03.png" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/home/04.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/home/05.png" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/home/06.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </>
    );
};

export default Banner;