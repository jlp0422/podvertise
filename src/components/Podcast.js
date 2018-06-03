/* eslint-disable */
import React from 'react';
import { genres, listeners, platforms } from '../dropdown';
import axios from 'axios'

class Podcast extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      genre: '',
      volume: '',
      host: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(ev) {
    const change = {}
    change[ev.target.name] = ev.target.value
    this.setState(change)
  }

  onSubmit() {
    const info = this.state
    axios.post('/apply', info)
  }

  render() {
    const { name, email, genre, volume, host } = this.state
    const { onChange, onSubmit } = this
    return (
      <div className="podcast-grid">
        <div className="pod-form-grid">
          <h1 className="pod-headline">Apply today</h1>
          <h3 className="pod-sub">To be a part of the Podvertise family</h3>

          <div className="form-group form-item">
            <label>Podcast Name</label>
            <input className="form-control" onChange={ onChange } name="name" value={name} placeholder="Podcast name" />
          </div>

          <div className="form-group form-item">
            <label>Email address</label>
            <input className="form-control" onChange={ onChange } name="email" value={email} placeholder="Email address" type="email" />
          </div>

          <div className="form-group form-item">
            <label>Genre</label>
            <select className="form-control" onChange={ onChange } name="genre" value={genre}>
              <option value={-1}>Select...</option>
              {
                genres.map(genre => (
                  <option key={ genre } value={ genre }>{ genre }</option>
                ))
              }
            </select>
          </div>

          <div className="form-group form-item">
            <label>Listener Count</label>
            <select className="form-control" onChange={ onChange } name="volume" value={volume}>
              <option value={-1}>Select...</option>
              {
                listeners.map(count => (
                  <option key={ count } value={ count }>{ count }</option>
                ))
              }
            </select>
          </div>

          <div className="form-group form-item">
            <label>Platform</label>
            <select className="form-control" onChange={ onChange } name="host" value={host}>
              <option value={-1}>Select...</option>
              {
                platforms.map(platform => (
                  <option key={ platform } value={ platform }>{ platform }</option>
                ))
              }
            </select>
          </div>
          <button onClick={ onSubmit } className="btn btn-success pod-button">Submit</button>
        </div>
      </div>
    )
  }
}

export default Podcast;
