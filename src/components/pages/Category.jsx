import React from "react";
import { categories } from "../page-data/food-data";


export default function Category() {

    return (

        <div className="max-w-[1640px] m-auto px-4 py-12">
            <h1 className="font-bold text-orange-500 text-center text-4xl"> Menu Items</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">

                {
                    categories.map((item, index) => {

                        return (
                            <div key={index} className="bg-gray-100 rounded-lg p-4 flex justify-between items-center" >
                                <h2 className="font-bold sm:text-xl">{item.name}</h2>
                                <img src={item.image} alt={item.name} className="w-20 " />


                            </div>

                        )
                    })
                }

            </div>

        </div>

    )
}