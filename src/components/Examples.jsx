import { useState } from 'react';
import { EXAMPLES, } from '../data';

import TabButton from './TabButton';


export default function Examples () {
    const [ selectedTab , setSelectedTab] = useState();
  
    //understanding how useState works from a functional point of view
  // const setSelectedTab = (value) => {
  //   return selectedTab = value
  // };
  
    function handlClick (buttonName){
      setSelectedTab(buttonName)
      console.log(buttonName)
    }
  
    let tabContent = <p>Please select a topic</p>
  
    if (selectedTab) {
      tabContent = (
        <div id="tab-content">
   <h3> {EXAMPLES[selectedTab]?.title}</h3>
        <p>{EXAMPLES[selectedTab]?.description}</p>
        <pre>
          <code>
          {EXAMPLES[selectedTab]?.code}
          </code>
        </pre>
        </div>
       
      )
    }


    return (
        <section title="Examples" id='examples'>
        <menu>   
          <TabButton selected={selectedTab === 'components' ? 'active' : ''} onClicked={() => handlClick('components')}> Components</TabButton>
          <TabButton selected={selectedTab === 'jsx' ? 'active' : ''} onClicked={() => handlClick('jsx')}> JSX</TabButton>
          <TabButton selected={selectedTab === 'props' ? 'active' : ''} onClicked={() => handlClick('props')}> Props</TabButton>
          <TabButton selected={selectedTab === 'state' ? 'active' : ''} onClicked={() => handlClick('state')} > state</TabButton>
        </menu>
    
        {tabContent}
    
        </section>
    )

}