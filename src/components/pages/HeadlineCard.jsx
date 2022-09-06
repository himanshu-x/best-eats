import React from "react";

export default function HeadlineCard() {

    return (
        <div className="max-w-[1640px] mx-auto p-4 py-6 grid md:grid-cols-3 gap-6">
            {/* card  */}

            <div className="rounded-xl relative hover:scale-105 ">
                {/* Overlay  */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's out</p>
                    <p className=" text-xl px-2">Throught B/26</p>
                    <button className="border-white bg-orange-500 text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[250px] w-full object cover rounded-xl" src="https://images.pexels.com/photos/551991/pexels-photo-551991.jpeg?auto=compress&cs=tinysrgb&w=600" alt="food cards" />
            </div>
            <div className="rounded-xl relative hover:scale-105 ">
                {/* Overlay  */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
                    <p className=" text-xl px-2">Added Daily</p>
                    <button className="border-white bg-orange-500 text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[250px] w-full object cover rounded-xl" src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600" alt="food cards" />
            </div>
            <div className="rounded-xl relative hover:scale-105">
                {/* Overlay  */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">We Deliver Dessert Too</p>
                    <p className=" text-xl px-2">Tasty Treats</p>
                    <button className="border-white bg-orange-500 text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[250px] w-full object cover rounded-xl" src="https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=600" alt="food cards" />
            </div>

        </div>


    )
}