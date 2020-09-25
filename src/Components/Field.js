import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Field extends React.Component{
   
    static contextType = LanguageContext;
    render(){
        
       // const text = this.context === 'english' ? 'Name' : ' Nama';
        return (
            <div className="ui field">
                <ColorContext.Consumer>
                { (color) => (
                    <label className={`ui label ${color}`}>
                    <LanguageContext.Consumer>
                         {({language})=>language === 'english' ? 'Name' : 'Nama'}
                        
                     </LanguageContext.Consumer>
                    </label>)
                }
               
               </ColorContext.Consumer>
               <input/>
            </div>
        );
    }
  
}

export default Field;