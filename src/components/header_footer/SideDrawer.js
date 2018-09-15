import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={()=> console.log('When')}>When</ListItem>
                <ListItem button onClick={()=> console.log('Where')}>Where</ListItem>
                <ListItem button onClick={()=> console.log('Sponsors')}>Sponsors</ListItem>
                <ListItem button onClick={()=> console.log('Contact')}>Contact</ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;