const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx');

class Projects extends React.Component{
    render() {
        return (
            <AppLayout
            title="A M A N D A   H O L L I D A Y"
            stylesheet="/style.css"
            js="/app.js"
            >
                <h2><a href="https://amandamholliday.github.io/project_1_margaret/">THE TRAVELER</a></h2>
                <div class="game1"><img src="https://res.cloudinary.com/dzgeqcksj/image/upload/v1607567905/Screen_Shot_2020-12-09_at_9.25.18_PM_n8ep7x.png"/></div>
            </AppLayout>
        )
    }
}

module.exports = Projects;