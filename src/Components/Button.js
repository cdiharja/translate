import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component{
  
    render(){
        //console.log(this.context);
        //const text = this.context === 'english' ? 'Submit' : ' Kirim';
        return (
            <button className="ui button primary">
                <LanguageContext.Consumer>
                    {({language})=>language === 'english' ? 'Submit' : ' Kirim'}
                </LanguageContext.Consumer>
            </button>             
        );
    }
  
}

export default Button;