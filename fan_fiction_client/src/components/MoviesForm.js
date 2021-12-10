import React, { Component } from 'react'

export default class MoviesForm extends Component {
    state ={
        title: '',
        plot: '',
        setting: '',
        genre: ''
    }
    render() {
        return (
            <div>
               <form>
                   <label>Title:</label>
                   <input type='text' value={this.state.title} name='title'/>
                   <br/>
                   <label>Plot:</label>
                   <input type='text' value={this.state.plot} name='plot'/>
                   <br/>
                   <label>Setting:</label>
                   <input type='text' value={this.state.setting} name='setting'/>
                   <br/>
                   <label>Genre:</label>
                   <input type='text' value={this.state.genre} name='genre'/>
                   <br/>
                   <input type='submit' value='Create Movie' />>
               </form>
            </div>
        )
    }
}
