import './title.css'
import logo from './logo.svg';
function Title(){
    return (
        <div class="title">
            <div class="logo" id='logo'><img src={logo}/></div>
            <div class="card-title"><h1>Get Your Best Shot</h1></div>
        </div>
    );
}

export default Title;