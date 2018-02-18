/* AccountMenu.js */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  MenuButton,
  ListItem,
  AccessibleFakeButton,
  IconSeparator,
  FontIcon
} from 'react-md';

const AccountMenu = props => { 
const user = props.user;
return (
  <div>
   <MenuButton
      id="menu-button-1"
      
      menuItems={[
        <ListItem key={1} primaryText="Logout" onClick={props.logout} />,
      ]}
      position={MenuButton.Positions.BOTTOM_RIGHT}
      anchor={{
        x: MenuButton.HorizontalAnchors.INNER_LEFT,
        y: MenuButton.VerticalAnchors.BOTTOM,
      }}
    >
    {user?
      <AccessibleFakeButton
      component={IconSeparator}
      iconBefore
      label={
        <IconSeparator label={`${user.firstName} ${user.lastName}`}>
          <FontIcon>arrow_drop_down</FontIcon>
        </IconSeparator>
      }
    >
      <Avatar suffix="grey">{user? `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`:""}</Avatar>
    </AccessibleFakeButton>:""}
    </MenuButton>
  </div>
);
};

AccountMenu.propTypes = {
  simplifiedMenu: PropTypes.bool,
  logout: PropTypes.func,
};

export default AccountMenu;