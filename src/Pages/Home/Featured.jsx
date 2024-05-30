import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import './Style/featured.css'


const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-10 my-20'>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Featured item"}
            />
            <div className='md:flex gap-5 justify-center 
            items-center px-36 pt-10 pb-20 bg-slate-600 bg-opacity-40'>
                <div>
                    <img src="/home/featured.jpg" alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>
                        Aug 20, 2029

                    </p>
                    <p className='uppercase'>
                        Where can i get some?
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugit. Nostrum voluptas pariatur, illo et ipsa fuga odit ullam aperiam, quae sint impedit repellat amet repellendus incidunt iusto esse quibusdam perferendis nobis ut voluptates ducimus. Totam possimus omnis tempora alias ex beatae illum minus unde accusantium expedita, hic natus accusamus?</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4 text-white'>Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;