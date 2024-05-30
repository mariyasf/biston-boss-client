import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItemCard from '../../Shared/MenuItemCard';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu, loading] = useMenu()
    const popularMenu = menu.filter(item =>
        item.category === 'popular'
    )

    return (
        <div className='mb-12'>
            <SectionTitle
                subHeading={"Popular Items"}
                heading={"From Our Menu"}
            />

            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popularMenu.map(item =>
                        <MenuItemCard
                            key={item._id}
                            item={item}
                        />
                    )
                }
            </div>

            <button className='btn btn-outline border-0 border-b-4 mt-4'>
                View Full Menu
            </button>

        </div>
    );
};

export default PopularMenu;