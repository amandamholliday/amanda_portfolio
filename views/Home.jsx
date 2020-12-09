const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx');

class Home extends React.Component {
    render() {
        return (
            <AppLayout
            title="Amanda Holliday's Home Page"
            stylesheet="/style.css"
            js="/app.js"
            >
                <h1>home page</h1>
            </AppLayout>
        )
    }
}

module.exports = Home;