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
                <div>Email: amandamholliday@gmail.com</div>
            </AppLayout>
        )
    }
}

module.exports = Contact;