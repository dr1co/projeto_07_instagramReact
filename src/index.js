import ReactDOM from 'react-dom';
import Navbar from './navbar.js';
import Content from './content.js';
import MobileFooter from './mobilefooter.js'

function App() {
    return (
        <div>
            <Navbar />
            <Content />
            <MobileFooter />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));