import React from 'react';
import Car1 from '../images/car1.webp';
import Car2 from '../images/car2.webp';
import Car3 from '../images/car3.webp';
import Car4 from '../images/car4.webp';
import Car5 from '../images/car5.webp';

const View_cars = () => {
    const carsData = [
        { img: Car1, name: "TOYOTA Corolla Altis", location: "Chennai", year: 2015, km: 100000, fuel: "Petrol", owner: "1st Owner", price: "₹ 8 Lakh*" },
        { img: Car2, name: "TATA MOTORS Zest", location: "Chennai", year: 2017, km: 100000, fuel: "Petrol", owner: "4th Owner", price: "₹ 4 Lakh*" },
        { img: Car3, name: "MARUTI SUZUKI ALTO", location: "Chennai", year: 0, km: 200000, fuel: "CNG", owner: "1st Owner", price: "₹ 3.5 Lakh*" },
        { img: Car4, name: "HONDA City [2008-2011]", location: "Chennai", year: 0, km: 200000, fuel: "Petrol", owner: "2nd Owner", price: "₹ 4 Lakh*" },
        { img: Car5, name: "AUDI Q3 [2015-2020]", location: "Chennai", year: 2015, km: 50000, fuel: "Petrol", owner: "1st Owner", price: "₹ 18 Lakh*" },
        { img: Car1, name: "TOYOTA Corolla Altis", location: "Chennai", year: 2015, km: 100000, fuel: "Petrol", owner: "1st Owner", price: "₹ 8 Lakh*" },
        { img: Car2, name: "TATA MOTORS Zest", location: "Chennai", year: 2017, km: 100000, fuel: "Petrol", owner: "4th Owner", price: "₹ 4 Lakh*" },
        { img: Car3, name: "MARUTI SUZUKI ALTO", location: "Chennai", year: 0, km: 200000, fuel: "CNG", owner: "1st Owner", price: "₹ 3.5 Lakh*" },
        { img: Car4, name: "HONDA City [2008-2011]", location: "Chennai", year: 0, km: 200000, fuel: "Petrol", owner: "2nd Owner", price: "₹ 4 Lakh*" },
        { img: Car5, name: "AUDI Q3 [2015-2020]", location: "Chennai", year: 2015, km: 50000, fuel: "Petrol", owner: "1st Owner", price: "₹ 18 Lakh*" },
        { img: Car1, name: "TOYOTA Corolla Altis", location: "Chennai", year: 2015, km: 100000, fuel: "Petrol", owner: "1st Owner", price: "₹ 8 Lakh*" },
        { img: Car2, name: "TATA MOTORS Zest", location: "Chennai", year: 2017, km: 100000, fuel: "Petrol", owner: "4th Owner", price: "₹ 4 Lakh*" },
        { img: Car3, name: "MARUTI SUZUKI ALTO", location: "Chennai", year: 0, km: 200000, fuel: "CNG", owner: "1st Owner", price: "₹ 3.5 Lakh*" },
        { img: Car4, name: "HONDA City [2008-2011]", location: "Chennai", year: 0, km: 200000, fuel: "Petrol", owner: "2nd Owner", price: "₹ 4 Lakh*" },
        { img: Car5, name: "AUDI Q3 [2015-2020]", location: "Chennai", year: 2015, km: 50000, fuel: "Petrol", owner: "1st Owner", price: "₹ 18 Lakh*" },
        { img: Car1, name: "TOYOTA Corolla Altis", location: "Chennai", year: 2015, km: 100000, fuel: "Petrol", owner: "1st Owner", price: "₹ 8 Lakh*" },
        { img: Car2, name: "TATA MOTORS Zest", location: "Chennai", year: 2017, km: 100000, fuel: "Petrol", owner: "4th Owner", price: "₹ 4 Lakh*" },
        { img: Car3, name: "MARUTI SUZUKI ALTO", location: "Chennai", year: 0, km: 200000, fuel: "CNG", owner: "1st Owner", price: "₹ 3.5 Lakh*" },
        { img: Car4, name: "HONDA City [2008-2011]", location: "Chennai", year: 0, km: 200000, fuel: "Petrol", owner: "2nd Owner", price: "₹ 4 Lakh*" },
        { img: Car5, name: "AUDI Q3 [2015-2020]", location: "Chennai", year: 2015, km: 50000, fuel: "Petrol", owner: "1st Owner", price: "₹ 18 Lakh*" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-6 bg-gray-100">
            {carsData.map((car, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={car.img} alt={car.name} className="w-full h-40 object-cover" />
                    <div className="p-3">
                        <h3 className="text-lg font-semibold truncate">{car.name}</h3>
                        <p className="text-sm text-gray-500">{car.location}</p>
                        <div className="flex justify-between text-gray-700 text-sm mt-2">
                            <span>{car.year}</span>
                            <span>{car.km} km</span>
                            <span>{car.fuel}</span>
                            <span>{car.owner}</span>
                        </div>
                        <p className="text-lg font-bold mt-2">{car.price}</p>
                        <button className="bg-blue-500 text-white w-full py-2 mt-2 rounded">Contact Seller</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default View_cars;
