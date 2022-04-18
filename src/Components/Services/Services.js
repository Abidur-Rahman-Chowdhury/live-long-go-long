import React from 'react';
import useService from '../../hooks/useService';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useService();
  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl mt-10 mb-4 text-[#22C55E] inline-block">
          Services
        </h2>
          </div>
          
          <div className='w-4/5 mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {
                  services.map(service => <Service key={service.id} service ={service}></Service>)
            }
          </div>
    </div>
  );
};

export default Services;
