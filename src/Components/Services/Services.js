import React, { useEffect, useState } from 'react';
import AddNewServiceDetails from '../AddNewServiceDetails/AddNewServiceDetails';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container mx-auto mt-5 bg-light">
            <h2 className=" fw-bolder bg-info text-white w-100  ">Explore our Tour Packages </h2>

            <div className="row row-cols-1 row-cols-md-2 g-4">

                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }

                <div className="container">
                    <h2 className=" fw-bolder bg-info text-white w-100  ">Your Adding Services</h2>
                    <AddNewServiceDetails></AddNewServiceDetails>
                </div>


            </div>
        </div>
    );
};

export default Services;