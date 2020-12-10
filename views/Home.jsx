const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx');

class Home extends React.Component {
    render() {
        return (
            <AppLayout
            title="A M A N D A   H O L L I D A Y"
            stylesheet="/style.css"
            js="/app.js"
            >
                <h1>home page</h1>
            </AppLayout>
        )
    }
}

module.exports = Home;