import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Beranda from './Beranda';
import Navbar from './Navbar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Beranda cat="tes"  txt="ini adalah props" />, document.getElementById('root'));
ReactDOM.render(<Navbar   />,document.getElementById('navbar') );
registerServiceWorker();
