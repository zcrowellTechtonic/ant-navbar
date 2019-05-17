import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "antd/lib/menu";
import PropTypes from "prop-types";
import throttle from "lodash.throttle";
import { Drawer } from "antd";
import "antd/dist/antd.css";
import Icon from "antd/lib/icon";

import "./styles.css";

const SubMenu = Menu.SubMenu;

function handleClick(e) {
  console.log("click", e);
}
class ResponsiveNav extends Component {
  state = {
    viewportWidth: 0,
    // menuVisible: false,
    visible: false
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  componentDidMount() {
    this.saveViewportDimensions();
    window.addEventListener("resize", this.saveViewportDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.saveViewportDimensions);
  }

  handleMenuVisibility = menuVisible => {
    this.setState({ menuVisible });
  };
  dropDown = visible => {
    this.setState({ visible });
  };

  saveViewportDimensions = throttle(() => {
    this.setState({
      viewportWidth: window.innerWidth
    });
  }, this.props.applyViewportChange);

  render() {
    const MenuMarkup = this.props.menuMarkup;

    if (this.state.viewportWidth > this.props.mobileBreakPoint) {
      return <MenuMarkup activeLinkKey={this.props.activeLinkKey} />;
    }

    return (
      <div>
        <div
          content={
            <MenuMarkup
              onLinkClick={() => this.handleMenuVisibility(false)}
              // activeLinkKey={this.props.activeLinkKey}
              mobileVersion
              // className='to-override-mobile-menu-class'
            />
          }
          trigger="click"
          // placement={this.props.placement}
          // visible={this.state.menuVisible}
          // onVisibleChange={this.handleMenuVisibility}
          onClick={this.showDrawer}
        >
          <div style={{ backgroundColor: "#000000" }}>
            <Icon type="menu" style={{ fontSize: "2.5em", color: "white", padding: '.25em' }} />
          </div>
        </div>
        <Drawer
          title="I'm a drawer. I think?"
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Menu onClick={handleClick} style={{ width: 256, backgroundColor: '#000000' }}
          mode="vertical">
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="home" />
                  <Link to="/">Home</Link>
                </span>
              }
            />
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="user" />
                  <Link to="/myaccount">My Account</Link>
                </span>
              }
            />
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="setting" />
                  <span>
                    <Link to="/admin">Admin</Link>
                  </span>
                </span>
              }
            />
          </Menu>
        </Drawer>
      </div>
    );
  }
}

ResponsiveNav.propTypes = {
  mobileBreakPoint: PropTypes.number,
  applyViewportChange: PropTypes.number,
  activeLinkKey: PropTypes.string,
  placement: PropTypes.string,
  menuMarkup: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

ResponsiveNav.defaultProps = {
  mobileBreakPoint: 575,
  applyViewportChange: 250,
  placement: "bottom"
};

export default ResponsiveNav;
