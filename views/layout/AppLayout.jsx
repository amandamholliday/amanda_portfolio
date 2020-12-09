const React = require('react');

class AppLayout extends React.Component {
    render(){
        return (
            <html>
                <head>
                    <meta charSet="utf-8"/>
                    <link rel="stylesheet" href={this.props.stylesheet}/>
                    <title>{this.props.title}</title>
                </head>
                <body>
                 <h1>{this.props.title}</h1>
                 <nav>
                     <ul>
                         <li><a href="/">Home</a></li>
                         <li><a href="/about">About</a></li>
                         <li><a href="/projects">Projects</a></li>
                         <li><a href="/contact">Contact</a></li>
                         <li><a href="/fun">Fun!</a></li>
                     </ul>
                 </nav>
                 {this.props.children}
                 <script src={this.props.js}></script>
                </body>
            </html>
        )
    }
}
module.exports = AppLayout;