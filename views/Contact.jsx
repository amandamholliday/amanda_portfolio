const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx');

class Contact extends React.Component{
    render() {
        return (
            <AppLayout
            title="A M A N D A   H O L L I D A Y"
            stylesheet="/style.css"
            js="/app.js"
            >
                {/* <ul classname="index-page">
                    {
                        // this.props.portfolio.map((element) => {
                        //     return (
                        //         <li>
                        //             THIS IS A TEST
                        //         </li>
                        //     )
                        // })
                    }
                </ul> */}
            </AppLayout>
        )
    }
}

module.exports = Contact;