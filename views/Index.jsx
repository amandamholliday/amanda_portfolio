const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx');

class Index extends React.Component{
    render() {
        return (
            <AppLayout
            title="A M A N D A   H O L L I D A Y"
            stylesheet="/style.css"
            js="/app.js"
            >
                <ul classname="index-page">
                    {
                        this.props.funstuff.map((fun) => {
                            return (
                                <li>
                                    <a href={`/fun/${fun._id}`}>{fun.words}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </AppLayout>
        )
    }
}

module.exports = Index;