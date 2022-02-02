import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import Sai from './components/Sai'

import './App.css'

class App extends Component {
  state = {listData: [], todoData: ''}

  componentDidMount() {
    this.getBlogs()
  }

  clickedData = async id => {
    const deleteone = `https://saikumarpikkili.herokuapp.com/todos/${id}`
    const options = {
      method: 'DELETE',
    }
    const responsedata = await fetch(deleteone, options)
    await responsedata.json()
    this.getBlogs()
  }

  changeData = event => {
    this.setState({todoData: event.target.value})
  }

  saikumarOnsubmit = async event => {
    event.preventDefault()
    const {todoData} = this.state
    const object = {
      id: uuidv4(),
      todo: todoData,
      isChecked: 'false',
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    }
    // console.log(options)

    const apiUrl = 'https://saikumarpikkili.herokuapp.com/todos/'
    await fetch(apiUrl, options)
    this.getBlogs()
  }

  getBlogs = async () => {
    const apiUrl = `https://saikumarpikkili.herokuapp.com/todos/`
    const response = await fetch(apiUrl)
    const data = await response.json()
    this.setState({listData: data})
  }

  render() {
    const {listData} = this.state
    // console.log(listData)
    return (
      <div className="background-details">
        <em>Durgs</em>
        <h1 className="userslist">Users List App</h1>
        <form onSubmit={this.saikumarOnsubmit}>
          <input
            type="text"
            placeholder="enter the data"
            onChange={this.changeData}
            onKeyPress={this.onpresskeyone}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {listData.map(each => (
            <Sai each={each} clickedData={this.clickedData} key={each.id} />
          ))}
        </ul>
        <div className="container-one">
          <table className="table-styling">
            <tr className="table-styling-one">
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Customer Email</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Sai</td>
              <td>saikumar@gmail.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sandeep</td>
              <td>sandeep@gmail.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sandeep</td>
              <td>sandeep@gmail.com</td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}

export default App
