import React from 'react';
import styles from './Cover.module.css';


function Footer() {
    const links =[
        {link: "English", href: ""},
        {link: "Subscriber Argument", href: "https://www.disneyplus.com/en-gb/legal/subscriber-agreement"},
        {link: "Privacy Policy", href: "https://www.disneyplus.com/en-gb/legal/privacy-policy"},
        {link: "UK & UE Privacy Rights", href: "https://www.disneyplus.com/en-gb/legal/uk-&-eu-privacy-rights"},
        {link: "Cookies Policy", href: "https://www.disneyplus.com/en-gb/legal/cookies-policy"},
        {link: "Interest-Based Ads", href: "https://preferences-mgr.trustarc.com/?pid=disney01&aid=disneyplusemea01&type=disneyplusemea"},
        {link: "Supported Devices", href: "https://help.disneyplus.com/csp?id=csp_article_content&sys_kb_id=d2b91d6bdb3048900a2af56e0f96197f"},
        {link: "Help Center", href: "https://help.disneyplus.com/csp"},
        {link: "About Us", href: "https://help.disneyplus.com/csp?id=csp_article_content&sys_kb_id=e2669dabdbfc08900a2af56e0f9619ce"},
        {link: "Manage Preference", href: ""}
    ]
  return (
    <React.Fragment>
        <div className={styles.footer}>
            <img src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original" alt="disney logo" />
            <div className='py-3'>
                {links.map((eachLink, idx)=><a key={idx} href={eachLink.href} target="_blank" rel="noopener noreferrer">{eachLink.link}</a>)}
            </div>
            <p>&copy; 2022 Disney and its related entities. All Rights Reserved.</p>
        </div>
    </React.Fragment>
  )
}

export default Footer