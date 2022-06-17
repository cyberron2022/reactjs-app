import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './styles.css';

import jsondata from '../../data/jsondata'
import Custom from '../Custom';
//import { AcademicCapIcon } from '@heroicons/react/solid'
import { AcademicCapIcon } from '@heroicons/react/outline'
import RomanNumberFunction from '../RomanNumberFunction';


function App() {

    return <div>
            {false && <Header /> }
            {false && <Custom data={jsondata}></Custom> }
            {false && <AcademicCapIcon className="h-5 w-5 text-blue-500" />}
            {false && <div className="container">
                <span className="container">This is my content4</span>
            </div> }
             
            
            {false && <Footer/>}
            
            <RomanNumberFunction />

            </div>
}

export default App;




