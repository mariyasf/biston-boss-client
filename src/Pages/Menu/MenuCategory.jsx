import Cover from "../Shared/Cover";
import MenuItemCard from "../Shared/MenuItemCard";


const MenuCategory = ({ menu, bgUrl, title }) => {
    return (
        <div className="space-y-5 mb-10">
            {
                title &&
                <Cover
                    bgUrl={bgUrl}
                    title={title}
                    description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maxime tenetur dicta perspiciatis voluptatum quisquam blanditiis tempora, ipsam molestiae nam."}

                />
            }
            <div className='pt-10 grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item =>
                        <MenuItemCard
                            key={item._id}
                            item={item}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default MenuCategory;