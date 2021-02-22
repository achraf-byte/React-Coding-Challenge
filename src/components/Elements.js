import React from 'react';
import Element from './Element'

import { useRef } from 'react';
function Elements({infos , isloading, isloadingtow}) {


  
  return isloading ? <h1>The Page is loding...</h1> : <div className="element" >
    {infos.map((item) =>{
   
      return   <Element name={item.name} key={item.id} repodescription={item.description} stars={item.watchers_count} issues={item.open_issues_count} sumited_at={item.pushed_at} owner={item.owner.login} image={item.owner.avatar_url} />
   

  })}
   {isloadingtow && <h1>the items are loding...</h1>}
  </div>
}

export default Elements;
