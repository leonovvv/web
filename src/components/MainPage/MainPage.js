import React, { Component } from 'react';
import Header from '../Header';
import Slider from '../Slider';
import Footer from '../Footer';
import './MainPage.scss';
class MainPage extends Component {
  render() {
    return (
      <body>
        <div class="wrapper">
          <Header />

          <Slider />
          <div class="content">
            <div class="two-third row1">
              <h2 class="text-stencil">
                Welcome to IC<span class="b-text">MM</span>D 20
                <span class="b-text">19</span>
              </h2>
              <p>
                <b class="b-text">
                  The 3rd International Conference on Mechatronics and
                  Mechanical Design (ICMMD)
                </b>
                , as the workshop of
                <a href="http://iccar.org/" target="_blank" class="b-text">
                  The 5th International Conference on Control, Automation and
                  Robotics (ICCAR)
                </a>
                will be held in
                <b>Beijing, China</b> during <b>April 19-22, 2019</b>.
                <br />
                With the growing capabilities of electronics, modern mechanical
                systems are embedded with electronics and controls. A background
                in Mechatronics engineering provides a strong set of skills and
                knowledge that will allow graduates to integrate seamlessly with
                this growing trend. ICMMD 2019 aimed at promoting research
                worldwide and publishes basic and advanced research work from
                all branches of engineering, physics, and materials science for
                the design, analysis, manufacturing, and maintenance of
                mechanical systems.
                <br />
                Download conference flyer. (
                <a href="files/flyer.pdf" target="_blank">
                  click
                </a>
                )
              </p>
            </div>

            <div class="one-third row1">
              <h3>Important Dates</h3>
              <p>
                <i class="far fa-calendar-alt" />
                <p>Paper Submission Deadline:</p>
                <p class="date"> March 5th, 2019</p>
                <p>Notification Date:</p> <p class="date">March 15th, 2019</p>
                <p>Registration Deadline:</p>
                <p class="date">March 25th, 2019</p>
              </p>
            </div>

            <div class="row2 full-width">
              <h2>Conference Proceedings</h2>
              <hr />
              <div class="proceedings">
                <h3>
                  <span class="red-text">Ei&Scopus</span> indexed Proceedings
                </h3>
                <p>
                  The reviewing process of the ICMMD conference aims to provide
                  authors with constructive feedback on their papers, even when
                  a submission is rejected. As the workshop of ICCAR, all
                  accepted papers will be published into ICCAR IEEE conference
                  proceedings as a special chapter which will be online and
                  indexed by the major database,
                  <span class="red-text">EI Compendex</span>, Scopus, etc.
                </p>
              </div>
            </div>

            <div class="row3 full-width">
              <h2>Program</h2>
              <hr />
              <table>
                <tr>
                  <td rowspan="2">April 19th, 2019</td>
                  <td>10:00-17:00</td>
                  <td>Registration, collecting conference materials</td>
                </tr>
                <tr>
                  <td>14:00-16:00</td>
                  <td>Tutorial Session (TBA)</td>
                </tr>
                <tr>
                  <td rowspan="3">April 20th, 2019</td>
                  <td>09:00-12:00</td>
                  <td>Keynote &amp; Plenary Speeches</td>
                </tr>
                <tr>
                  <td>13:00-18:00</td>
                  <td>Oral &amp; Poster Presentations</td>
                </tr>
                <tr>
                  <td>15:00-16:00</td>
                  <td>Poster Session</td>
                </tr>
                <tr>
                  <td rowspan="4">April 21st, 2019</td>
                  <td>09:00-12:00</td>
                  <td>Keynote & Plenary Speeches</td>
                </tr>
                <tr>
                  <td>13:00-18:00</td>
                  <td>Oral & Poster Presentations</td>
                </tr>

                <tr>
                  <td>15:00-16:00</td>
                  <td>Poster Session</td>
                </tr>
                <tr>
                  <td>18:00-19:00</td>
                  <td>Closing Ceremony</td>
                </tr>
              </table>
            </div>

            <div class="row4 full-width">
              <h2>Technical Supported by</h2>
              <hr />
              <div class="our-clients">
                <img src="../img/logo.jpg" />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    );
  }
}

export default MainPage;
