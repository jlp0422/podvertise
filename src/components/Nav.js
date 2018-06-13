/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';

class Nav extends React.Component {
  constructor() {
    super()
    this.state = { isOpen: false }
    this.onOpenModal = this.onOpenModal.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
  }

  onOpenModal() {
    this.setState({ isOpen: true })
  }

  onCloseModal() {
    this.setState({ isOpen: false })
  }

  render() {
    const { onOpenModal, onCloseModal } = this
    const { isOpen } = this.state
    return (
      <_Nav onOpenModal={ onOpenModal } onCloseModal={ onCloseModal } isOpen={ isOpen }/>
    )
  }
}

const _Nav = ({ isOpen, onCloseModal, onOpenModal }) => {
  return (
    <div className="nav-wrapper">
      <div className="logo-grid">
        <Link className="logo-image-grid" to='/about'><img className="logo-image" src="http://www.ccorpusa.com/wp-content/uploads/2017/07/logo.png" /></Link>

        <div className="login-btn">
          <button className="btn btn-outline-primary" onClick={ onOpenModal }>Sign in</button>
          { isOpen &&
            <Modal open={ isOpen } onClose={ onCloseModal } center closeIconSize={24} classNames={{ modal: 'custom-modal'}}>
              <h3 className="login-text">Sign in</h3>
              <a href="/auth/google">
                <img className="login-btn-google" src='../vendor/images/login-google.png' />
              </a>
              <a href="/auth/facebook">
                <img className="login-btn-facebook" src='../vendor/images/login-facebook.png' />
              </a>
              <a href="/auth/github">
                <img className="login-btn-github" src='../vendor/images/login-github.png' />
              </a>
            </Modal>
          }
        </div>
      </div>
      <div className="nav-grid">
        <Link className="nav-link-1" to='/about'>About</Link>
        <Link className="nav-link-2" to='/podcast'>Podcast</Link>
        <Link className="nav-link-3" to='/advertise'>Advertise</Link>
        <Link className="nav-link-4" to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Nav;
