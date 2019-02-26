import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nombre: '',
      apellido: '',
      formData: []
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleApellidoChange = this.handleApellidoChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      nombre: e.target.value
    });
  }

  handleApellidoChange(e) {
    this.setState({
      apellido: e.target.value
    });
  }

  handleFormSubmit(e) {
    if (this.state.nombre !== "" && this.state.apellido !== "") {
      this.setState({
        formData: this.state.formData.concat({ nombre: this.state.nombre, apellido: this.state.apellido }),
        nombre: '',
        apellido: ''
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleFormSubmit} >
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" value={this.state.nombre} onChange={this.handleNameChange} name="first-name" />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" value={this.state.apellido} onChange={this.handleApellidoChange} name="last-name" />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
              {this.state.formData.map((formData, index) => 
              <tr key={index}>
                <td>{formData.nombre}</td>
                <td>{formData.apellido}</td>
              </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App