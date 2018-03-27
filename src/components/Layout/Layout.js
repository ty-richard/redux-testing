import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const layout = ( props ) => (
  <Aux>
    <div className='layoutContent'>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.layoutContent}>
      {props.children}
    </main>
  </Aux>
)

export default layout;
