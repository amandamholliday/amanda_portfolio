const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx');

class Show extends React.Component {
    render(){
        return (
            <AppLayout
            title="A M A N D A   H O L L I D A Y"
            stylesheet="/style.css"
            js="/app.js"
            >
                <h2>Write some words that will appear on my homepage!</h2>
                <form action="/home" method="POST">
                Words: <input type="text" name={this.props.funstuff.words} /><br/>
                <input type="submit" name="" value="Post"/>
                <button><a href="/fun/:id/edit">Edit</a></button>
             </form>
            </AppLayout>
        )
    }
}
module.exports = Show;