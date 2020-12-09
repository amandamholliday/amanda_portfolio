const React = require('react');


class Index extends React.Component{
    render() {
        return (
            <AppLayout
            title="Amanda Holliday's Index Page"
            stylesheet="/style.css"
            js="/app.js"
            html="/index.html"
            >
                <ul classname="index-page">
                    {
                        
                    }
                </ul>
            </AppLayout>
        )
    }
}

module.exports = Index;