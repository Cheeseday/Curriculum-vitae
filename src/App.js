import React from 'react';
import './App.scss';
import { CvContext } from './context/CvContext';
import Layout from './components/layout/Layout';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(
      <CvContext.Provider value ={{ state: this.state, 
                                      inputValueHandler: this.inputValueHandler,
                                      currencyValueHandler: this.currencyValueHandler,
                                      calculatorHandler: this.calculatorHandler,
                                    }}>
        <Layout/>
      </CvContext.Provider>
    )
  }
}

export default App;