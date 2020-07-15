import React from "react";
import { render } from "@testing-library/react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import createAd from "../../services/ServicioCrearAd";

class MyCreateAd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nombre: "", descripcion: "", venta: "", precio:"", foto: "", tags: "", dateCreation: "", err: "", messageOK: "" };

    this.handleChangeNombre = this.handleChangeNombre.bind(this);
    this.handleChangeDescripcion = this.handleChangeDescripcion.bind(this);
    this.handleChangeVenta = this.handleChangeVenta.bind(this);
    this.handleChangePrecio = this.handleChangePrecio.bind(this);
    this.handleChangeFoto = this.handleChangeFoto.bind(this);
    this.handleChangeTags = this.handleChangeTags.bind(this);
    this.handleChangeDateCreation = this.handleChangeDateCreation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    let createAdResponse = await createAd(this.state.nombre, this.state.descripcion, this.state.venta, this.state.precio, this.state.foto, this.state.tags, this.state.dateCreation);
    if (createAdResponse.data.success) {
      localStorage.setItem("cookie-login", this.state.username);
      return this.props.history.push(`/ad-details/${createAdResponse.data.idAnuncio}`);
    } else {
      alert("Something went wrong, please try again");
    }
  }
  handleChangeNombre(event) {
    console.log(event.target.value);
    this.setState({
      nombre: event.target.value,
    });
  }
  handleChangeDescripcion(event) {
    console.log(event.target.value);
    this.setState({
      descripcion: event.target.value,
    });
  }
   handleChangeVenta(event) {
    console.log(event.target.value);
    this.setState({
      venta: event.target.value,
    });
  }
   handleChangePrecio(event) {
    console.log(event.target.value);
    this.setState({
      precio: event.target.value,
    });
  }
   handleChangeFoto(event) {
    console.log(event.target.value);
    this.setState({
      foto: event.target.value,
    });
  }
   handleChangeTags(event) {
    console.log(event.target.value);
    this.setState({
      tags: event.target.value,
    });
  }
   handleChangeDateCreation(event) {
    console.log(event.target.value);
    this.setState({
      dateCreation: event.target.value,
    });
  }



/*async crearAnuncio(filters) {
    var miCookie = localStorage.getItem("cookie-login");
    if (miCookie === undefined) {
      alert("Oooop looks like you are not logged");
    } else {
      let anunciosResponse;
      try {
        anunciosResponse = await listadoAnuncios(filters);
        if (anunciosResponse.data.success) {
          this.setState({
            anuncios: anunciosResponse.data.results,
            filters: filters,
            tags: this.state.tags,
          });
        }
      } catch (error) {
        alert("Oooop looks like you are not logged");
      }
    }
  }*/



render() {
    return (
      <div className="container">
        <h1>Crear Ad</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="exampleInputNombre">Nombre:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputNombre"
              aria-describedby="emailHelp"
              value={this.state.nombre}
              onChange={this.handleChangeNombre}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputDescripcion">Descripción:</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputDescripcion"
              value={this.state.descripcion}
              onChange={this.handleChangeDescripcion}
            />
          </div>
           <div className="form-group">
            <label for="exampleInputVenta">Venta:</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputVenta"
              value={this.state.venta}
              onChange={this.handleChangeVenta}
            />
          </div>
           <div className="form-group">
            <label for="exampleInputPrecio">Precio:</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPrecio"
              value={this.state.precio}
              onChange={this.handleChangePrecio}
            />
          </div>
           <div className="form-group">
            <label for="exampleInputFoto">Foto:</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputFoto"
              value={this.state.foto}
              onChange={this.handleChangeFoto}
            />
          </div>
           <div className="form-group">
            <label for="exampleInputTags">Tags:</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputTags"
              value={this.state.tags}
              onChange={this.handleChangeTags}
            />
          </div>
           <div className="form-group">
            <label for="exampleInputDateCreation">DateCreation:</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputDateCreation"
              value={this.state.dateCreation}
              onChange={this.handleChangeDateCreation}
            />
          </div>
          
          <button type="submit" className="btn btn-primary" value="Submit">
            Submit
          </button>
        </form>
        <Link to="/" className="enlace">¿Donde llevo este enlace?</Link></div>
    );
  }
}

export default MyCreateAd;


