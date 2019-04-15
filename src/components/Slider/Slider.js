import React, { Component } from 'react';
import './Slider.scss';
import sliderImage from './sliderImage';
class Slider extends Component {
  state = {
    currentImage: 0,
    sliderCircle: true,
  };

  PrevImage = () => {
    this.setState({
      currentImage:
        this.state.currentImage - 1 >= 0
          ? this.state.currentImage - 1
          : this.state.currentImage,
    });
  };

  NextImage = () => {
    this.setState({
      currentImage:
        this.state.currentImage + 1 < sliderImage.length
          ? this.state.currentImage + 1
          : this.state.currentImage,
    });
  };

  render() {
    const { currentImage, sliderCircle } = this.state;
    return (
      <div class="slider">
        <div className="slider_button">
          <button
            className="close-button"
            onClick={() =>
              this.setState({
                sliderCircle: !this.state.sliderCircle,
              })
            }
          >
            <i class="fas fa-times" />
          </button>
          <button className="prev-next-button" onClick={() => this.PrevImage()}>
            <i class="fas fa-angle-left" />
          </button>

          <button className="prev-next-button" onClick={() => this.NextImage()}>
            <i class="fas fa-angle-right" />
          </button>
          <div className="slider_circle_block">
            {this.state.sliderCircle
              ? sliderImage.map(c => (
                  <a
                    className="slider_circle"
                    key={c}
                    onClick={() => this.PrevImage()}
                  />
                ))
              : console.log('Slider circle was removed!!!')}
          </div>
        </div>
        <img src={sliderImage[currentImage]} />
      </div>
    );
  }
}

export default Slider;
