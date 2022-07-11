import React, {useState} from 'react';
import styles from './Cover.module.css';


function FrequentlyQ() {
    const data = [
        {
            id: 1,
            title: "What is Disney+?", 
            description: "Disney+ is the streaming home for entertainment from Disney, Pixar, Marvel, Star Wars, National Geographic, Star and more.",
            categoryTitle: "Disney+ has a number of benefits included in the standard subscription price:",
            subCategories: ['Exclusive Originals you can’t see anywhere else, blockbuster movies, bingeable shows, snackable shorts, and inspiring documentaries',
                        "Unlimited downloads on up to 10 devices and up to 7 different profiles",
                        "4K UHD streaming with Dolby Vision and Dolby Atmos support on compatible devices for no extra cost",
                        "A robust parental controls system including dedicated profiles for children",
                        "Up to 4 screens can stream simultaneously",
                        "Host virtual viewing parties for up to 5 personal friends with Groupwatch"]
        },
        
        {
            id: 2,
            title: "What can I watch on Disney+?", 
            description: "With thousands of films and series from the greatest storytellers around the globe and more added each month, you will always find something to watch on Disney+",
            subCategories: ['The latest live-action and animated blockbusters from Disney, like Raya and The Last Dragon',
                        "Heart-warming storytelling for all ages from the masterminds at Pixar such as this summer’s must-see Italian adventure Luca",
                        "Experience the ever-growing story of the Marvel Cinematic Universe like never before with must-see exclusive Original series from Marvel Studios - WandaVision, The Falcon and The Winter Soldier and Loki",
                        "Relive the epic Skywalker Saga or stream the world’s first ever live-action Star Wars series, The Mandalorian",
                        "Open your eyes to the beauty of our planet with fearless National Geographic explorers and a number of insightful documentaries",
                        "With Star you will find bingeable series that everyone is talking about like the exclusive final season of the global phenomenon The Walking Dead"]
        },
        {
            id: 3,
            title: "How much does Disney+ cost?", 
            description: "Disney+ subscription costs €8.99 a month. Alternatively, save over 15%* with the annual subscription at €89.90 a year and get 12 months for the price of 10.",
            subDes: "*savings compared to 12 months of the monthly price."
        },
        {
            id: 4,
            title: "What devices are supported?", 
            description: "Disney+ supports mobile devices, web browsers, game consoles, set-top boxes, and smart TVs. Click here for the full list."
        },
        {
            id: 5,
            title: "Is there any commitment when signing up for Disney+?", 
            description: "There are no commitments and you can cancel at any time, effective at the end of your current payment period. Just follow the below 5 easy steps:",
            numberedCategories: ["Go to www.disneyplus.com and log in", "Select your Profile", "Select Account",
        "Select Cancel Subscription", "Select Complete Cancellation to confirm"],
        link: "For more information click"
        }
    ]
    const [detailedItem, setDetailedItem] = useState({});
    const displayDetails = (item)=> {
        setDetailedItem(item)
    }
    
  return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                {data.map((item)=><div className={`col-12 mb-3 p-4 ${styles.questionSection}`} key={item.id}>
                    <div>
                        <div className='d-flex justify-content-between' onClick={()=>{displayDetails(item)}}>
                            <h4>{item.title}</h4>
                            <i className="fa-solid fa-plus text-white"></i>
                        </div>
                        {detailedItem && detailedItem.id === item.id && (<div id={item.id}>
                        <p>{item.description}</p>
                        {item.categoryTitle&& <p>{item.categoryTitle}</p>}
                        {item.subCategories && <ul>{item.subCategories.map((el, idx)=> <li key={idx}>{el}</li>)}</ul>}
                        {item.subDes && <p>{item.subDes}</p>}
                        {item.numberedCategories && <ol>{item.numberedCategories.map((el, idx)=> <li key={idx}>{el}</li>)}</ol>}
                        {item.link && <a className="text-decoration-none text-white" href="https://help.disneyplus.com/csp?id=csp_article_content&sys_kb_id=af34a1bedbd4541cc2deeacb1396197e">{item.link} <span className="text-decoration-underline">here</span></a>}
                    </div>)}
                    </div>
                </div>)}
            </div>
        </div>
    </React.Fragment>
  )
}

export default FrequentlyQ