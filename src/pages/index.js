import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Hospitality Tribe"
                    meta={[
                        { name: 'description', content: 'THE definitive hospitality services and training group. ' +
                        'Created by hospitality professionals, for hospitality professionals. Let us manage all your data entry, ' + 
                        ' training, and event needs. '},

                        { name: 'keywords', content: 'Amadeus, Delphi, delphi.fdc, Maestro, Square, Concur.' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>ABOUT</h3>
                                <p>Who we are & what we do</p>
                            </header>
                            <Link to="/about" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>CONSULTING SERVICES</h3>
                                <p>Let us get your hotel opening or system migration running smoothly</p>
                            </header>
                            <Link to="/consulting" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>TRAINING & EDUCATION</h3>
                                <p>Using a new property management system? Chances are, we've got the expertise. </p>
                            </header>
                            <Link to="/training" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>COMMUNITY</h3>
                                <p>Coming soon: a place to network, share and discuss with your fellow industry colleagues.</p>
                            </header>
                        </article>
                        {/* <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Consequat</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Etiam</h3>
                                <p>Feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article> */}
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex