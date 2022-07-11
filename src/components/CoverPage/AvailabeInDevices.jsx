import React from 'react';

function AvailabeInDevices() {
    const data = [
        {
            id: 1,
            img: "https://cnbl-cdn.bamgrid.com/assets/00fb59319fa715222100d8a84d11bc7e23a42970b4f413c9e85166d0cfba9346/original",
            title: "TV",
            devices: ["Android TV devices", "Apple TV", "Chromecast", "LG TVs", "Samsung"]
        },
        {
            id: 2,
            img: "https://cnbl-cdn.bamgrid.com/assets/d73b7c534afd2af2a454dbd47bd6c766c70e334ce8137084e9cd25c2644dd267/original",
            title: "Computer",
            devices: ["Chrome OS", "MacOS", "Windows PC"]
        },
        {
            id: 3,
            img: "https://cnbl-cdn.bamgrid.com/assets/66475056e769443ef9a491a48dfa44059c8964890ae9ef7c4f69f322693c59d8/original",
            title: "Mobile & Tablet",
            devices: ["Android Phones &", "Tablets", "iPhone & iPad"]
        },
        {
            id: 4,
            img: "https://cnbl-cdn.bamgrid.com/assets/51b639d2ebe97ee175975c29d42a90b0e043713856db8e5d6d9fb87b2b3a48c0/original",
            title: "Game Consoles",
            devices: ["PS4", "PS5", "Xbox One", "Xbox Series X", "Xbox Series S"]
        }
    ]
  return (
    <React.Fragment>
        <div className="container">
            <div className="row text-center">
                <div className="col-md-12">
                    <div>
                        <h2>Available on your favourite devices</h2>
                    </div>
                </div>
                {data.map((item)=><div className='col-md-3' key={item.id}>
                    <div>
                        <img className='img-fluid' src={item.img} alt={item.title} />
                        <h3>{item.title}</h3>
                        <ul className='list-unstyled'>
                            {item.devices.map((element, idx) => 
                                <li key={idx}>{element}</li>
                            )}
                        </ul>
                    </div>
                </div>
                )}
            </div>
        </div>
    </React.Fragment>
  )
}

export default AvailabeInDevices