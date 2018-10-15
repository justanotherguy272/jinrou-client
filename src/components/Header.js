import React from 'react'

export default class Header extends React.Component {
    onClickProfile = () => {
        this.props.onClick('profile');
    };

    onClickHome = () => {
        this.props.onClick('home');
    };

    onClickLogOut = () => {
        this.props.onClick('logout');
    }

    render() {
        return (
            <div className="header-wrap">
                <div className="header-top d-flex justify-content-between align-items-center">
                    <div className="logo">
                        Jinrou
                    </div>
                    <div className="main-menubar d-flex align-items-center">
                        <nav>
                            <span onClick={this.onClickHome}>Home</span>
                            <span onClick={this.onClickProfile}>Profile</span>
                            {this.props.data.logged_in && (
                                <span onClick={this.onClickLogOut}>Log out</span>)
                            }
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}