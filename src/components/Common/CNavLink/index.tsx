import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export const CNavLink = (props: NavLinkProps): JSX.Element => {

    // {children}
    // 相当于
    // <NavLink children={this.props.children} />
    // 功能等同于  angular的 ng-container， vue的 slot
    return (
        <NavLink  {...props} />
);
};

