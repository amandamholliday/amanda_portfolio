const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx');

class New extends React.Component {
    render(){
        return (
            <AppLayout
            title="New Portfolio Page"
            stylesheet="/style.css"
            >
                
            </AppLayout>
        )
    }
}
module.exports = New;