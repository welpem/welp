import React from 'react';

function About(){
    return(
        <main className='About'>
            <h1>About</h1>
            <section>
                <h2>...the product</h2>
                <p>Welp is a business resource site to help businesses tell other businesses about customers to watch for (whether it be good or bad).</p>
            </section>
            <section>
                <h2>...the team</h2>
                <p>Welp was designed and developed by a team of four DevMountian Bootcamp students.</p>
                <ul>
                    <li className='developers'>{'Kevin Pessetto'.toUpperCase()} brought the idea of this project to the group and served as the lead developer of the project. He also personally developed the Wall of Shame page.</li><br />
                    <li className='developers'>{'Mark Nagel'.toUpperCase()} served as the database specialist as well as the developer of the welps review page.</li><br />
                    <li className='developers'>{'David Newman'.toUpperCase()} served as the authorization and session specialist for the project. He is responsible for the registration and login elements.</li><br />
                    <li className='developers'>{'Rachel Tunon'.toUpperCase()} served primarily as the designer for the project. It is thanks to her that you see the style you do. She developed and implemented style components from scratch.</li>
                </ul>
            </section>
        </main>
    )
}

export default About