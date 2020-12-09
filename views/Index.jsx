const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx');

class Index extends React.Component{
    render() {
        return (
            <AppLayout
            title="Amanda Holliday's Index Page"
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

module.exports = Index;