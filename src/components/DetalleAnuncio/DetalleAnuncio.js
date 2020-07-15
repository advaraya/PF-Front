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
import getDetalleAnuncio from "../../services/ServicioDetalleAnuncio.js";

class Ad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlAnuncio: props.match.params.urlAnuncio,
      result: {
        /*
        tags: ["lifestyle"],
        _id: "5d3a0a5f9bd7ed2ece463ab4",
        name: "PS4Pro",
        description: "Compro PS4 Pro con menos de 1 año de uso",
        price: 200.99,
        type: "buy",
        photo: "/images/anuncios/ps4pro.jpg",
        __v: 0,
        createdAt: "2019-07-25T20:00:31.944Z",
        updatedAt: "2019-07-25T20:00:31.945Z",
        username:"Tengo que meterlo en node",
        */
      },
    };
    this.adDetail();
  }
  async adDetail() {
    /*var miCookie = localStorage.getItem("cookie-login");
    if (miCookie === undefined) {
      alert("Oooop looks like you are not logged");
    } else {*/
    let anunciosDetalle;
    try {
      anunciosDetalle = await getDetalleAnuncio(this.state.urlAnuncio);
    } catch (error) {}
    if (anunciosDetalle.data.success) {
      console.log(anunciosDetalle.data);
      this.setState({
        urlAnuncio: this.state.urlAnuncio,
        result: anunciosDetalle.data.result,
      });
    }

    console.log(this.state);
    //}
  }
  render() {
    return (
      <div id="page" className="theia-exception">
        <main>
          <div className="hero_in hotels_detail">
            <div className="wrapper">
              <span className="magnific-gallery">
                <figure className="figure">
                  <img src={this.state.result.photo} className="img-fluid" />
                </figure>
              </span>
            </div>
          </div>
          <nav className="secondary_nav sticky_horizontal_2">
            <div className="container">
              <ul className="clearfix">
                <li>
                  <a href="#description" class="active">
                    {this.state.result.auth}
                  </a>
                </li>
                <li>
                  <a href="#reviews">Reviews</a>
                </li>
                <li>
                  <a href="#sidebar">Booking</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container margin_60_35">
            <div className="row">
              <div className="col-lg-8">
                <section id="description">
                  <div className="detail_title_1">
                    <div class="cat_star">
                      <i className="icon_star"></i>
                      <i className="icon_star"></i>
                      <i className="icon_star"></i>
                      <i className="icon_star"></i>
                    </div>
                    <h1>{this.state.result.name}</h1>
                  </div>
                  <p>{this.state.result.description}</p>
                  <p>
                    Cum et probo menandri. Officiis consulatu pro et, ne sea
                    sale invidunt, sed ut sint <strong>blandit</strong>{" "}
                    efficiendi. Atomorum explicari eu qui, est enim quaerendum
                    te. Quo harum viris id. Per ne quando dolore evertitur, pro
                    ad cibo commune.
                  </p>
                  <h5 className="add_bottom_15">Amenities</h5>
                  <div className="row add_bottom_30">
                    <div className="col-lg-6">
                      <ul className="bullets">
                        <li>{this.state.result.type}</li>
                      </ul>
                    </div>
                  </div>
                  <h3>Prices</h3>
                  <p>{this.state.result.price}</p>
                </section>
              </div>
            </div>
          </div>
          <aside class="col-lg-4" id="sidebar">
            <div class="box_detail booking">
              <div class="price">
                <span>{this.state.result.price}</span>
                <div class="score">
                  <strong> {this.state.result.tags}</strong>
                </div>
              </div>
              <a
                href="checkout.html"
                class=" add_top_30 btn_1 full-width purchase"
              >
                Purchase
              </a>
              <a href="wishlist.html" class="btn_1 full-width outline wishlist">
                <i class="icon_heart"></i> Add to wishlist
              </a>
              <div class="text-center">
                <small>No money charged in this step</small>
              </div>
            </div>
            <ul class="share-buttons">
              <li>
                <a class="fb-share" href="#0">
                  <i class="social_facebook"></i> Share
                </a>
              </li>
              <li>
                <a class="twitter-share" href="#0">
                  <i class="social_twitter"></i> Share
                </a>
              </li>
              <li>
                <a class="gplus-share" href="#0">
                  <i class="social_googleplus"></i> Share
                </a>
              </li>
            </ul>
          </aside>
        </main>
        {/*<div className="container-DetallAd">
        <div className="row">
          <div className="col-6">
            <h2>NOMBRE DEL PRODUCTO: {this.state.result.name}</h2>
            <p>DESCRIPCIÓN: {this.state.result.description}</p>
            <p>PRECIO: {this.state.result.price} €</p>
            <p>TIPO: {this.state.result.type}</p>
            <p>
              TAGS:
              <span className="badge badge-pill badge-success">
                {this.state.result.tags}
              </span>
            </p>
          </div>
          <div className="col-6">
            <figure className="figure">
              <img src={this.state.result.photo} className="img-fluid" />
            </figure>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <Link to="/listing">Volver al listado de anuncios</Link>
        </div>
    </div>*/}
        <div className="row justify-content-md-center">
          <Link to="/listing">Volver al listado de anuncios</Link>
        </div>
      </div>
    );
  }
}

export default Ad;
