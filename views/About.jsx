const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx');

class About extends React.Component{
    render() {
        return (
            <AppLayout
            title="A M A N D A   H O L L I D A Y"
            stylesheet="/style.css"
            js="/app.js"
            >
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus obcaecati modi id eius eveniet ducimus officiis nisi facilis, architecto ad dolores omnis consequatur aperiam? Ut harum perferendis exercitationem ex.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, distinctio ad nemo animi excepturi sed doloribus obcaecati nesciunt necessitatibus autem consectetur optio maxime maiores suscipit. Magni, autem maxime? Quas, neque.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias amet voluptate deserunt quisquam distinctio possimus fugiat ducimus explicabo, illum reiciendis consequuntur ad dicta minima ullam eveniet modi vel asperiores. Minus!</p>
            </AppLayout>
        )
    }
}

module.exports = About;