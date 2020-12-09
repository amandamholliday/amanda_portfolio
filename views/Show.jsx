const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx');

class Show extends React.Component {
    render(){
        return (
            <AppLayout
            title="Portfolio Page"
            stylesheet="/style.css"
            js="/app.js"
            >

            </AppLayout>
        )
    }
}
module.exports = Show;