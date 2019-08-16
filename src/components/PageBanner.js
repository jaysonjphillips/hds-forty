import React from 'react'

const PageBanner = (props) => (
    <section id="banner" className="style1">
        <div className="inner">
            <header className="major">
                <h1>{props.title}</h1>
            </header>
            <div className="content">
                {/* <p>Lorem ipsum dolor sit amet nullam consequat<br />
                sed veroeros. tempus adipiscing nulla.</p> */}
            </div>
        </div>
    </section>
)

export default PageBanner
