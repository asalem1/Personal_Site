import React, { Component } from 'react';

export default class CurrentProjects extends Component {

  render() {
    return (
     <div id="portfolio" className="project-info">
      <div className="row">
        <div className="col-md-3 offset-md-1 col-sm-11 project-body">
          <div className="row">
            <a target="_blank"  href="https://organico-plantr.herokuapp.com">
             <img className="project-picture" src="../../public/img/Plantr.jpg" />
            </a>
          </div>
          <div className="row">
           <br />
           <div className="project-info">
             <p className="project-name">PLANTR</p>
             <div className="project-description">
               <p>Plantr is an online gardening and outdoor decor service where you can create and plan your seasonal gardens based on regional variations and personal needs.</p>
               <div className="project-role">
                 <b>ROLE: </b>
                 <i>Scrum Master</i>
               </div>
             </div>
           </div>
         </div>
        </div>
        <div className="col-md-3 col-sm-11 project-body">
          <div className="row"><a target="_blank" href="https://stackets-orion.herokuapp.com">
             <img className="project-picture" src="../../public/img/Stackets.jpg" />
           </a>
         </div>
          <div className="row">
           <br />
           <div className="project-info">
           <p className="project-name">STACKETS</p>
           <div className="project-description">
             <p>Stackets is a personalized programming assistant that allows users to work through, solve, and store helpful tips and tricks for becoming a computer programming.</p>
             <div className="project-role">
               <b>ROLE: </b>
               <i>Product Owner</i>
             </div>
           </div>
          </div>
         </div>
        </div>
        <div className="col-md-3 col-sm-11 project-body">
            <div className="row"><a target="_blank" href="https://organico-plantr.herokuapp.com">
               <img className="project-picture" src="../../public/img/Thymer.jpg" />
             </a></div>
            <div className="row">
             <br />
             <div className="project-info">
             <p className="project-name">THYMER</p>
             <div className="project-description">
               <p>Thymer is the personal Sous Chef you never knew you needed. From automated timers that keep you on track, to vocalized recipes, this app makes cooking fun and easy. </p>
               <div className="project-role">
                 <b>ROLE: </b>
                 <i>Software Engineer</i>
               </div>
             </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    );
  }
}

// ALTERNATIVE LOOK
/*      <div>
        <div className="row project-body-right">
          <div className="col-md-4 col-sm-12">
            <a href="https://organico-plantr.herokuapp.com">
              <img className="project-picture" src="../../public/img/Plantr.png" />
            </a>
          </div>
          <div className="col-md-8 col-sm-12">
            <br />
            <div id="portfolio" className="project-info">
              <p className="project-name">PLANTR</p>
              <div className="project-description">
                <p>Plantr is an online gardening and outdoor decor service where you can create and plan your seasonal gardens based on regional variations and personal needs.</p>
                <div className="project-role">
                  <b>ROLE: </b>
                  <i>Scrum Master</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row project-body-left">
          <div className="col-md-7 col-sm-12">
            <br />
            <p className="project-name">STACKETS</p>
            <div className="project-description">
              <p>Plantr is an online gardening and outdoor decor service where you can create and plan your seasonal gardens based on regional variations and personal needs.</p>
              <div className="project-role">
                <b>ROLE: </b>
                <i>Product Owner</i>
              </div>
            </div>
          </div>
          <div className="col-md-4 offset-md-1 offset-sm-0 col-sm-12">
            <a href="https://stackets-orion.herokuapp.com">
              <img className="project-picture-right" src="../../public/img/Stackets.png" />
            </a>
          </div>
        </div>
        <div className="row project-body-right">
          <div className="col-md-4 col-sm-12">
            <a href="https://organico-plantr.herokuapp.com">
              <img className="project-picture" src="../../public/img/thymer.jpg" />
            </a>
          </div>
          <div className="col-md-8 col-sm-12">
            <br />
            <p className="project-name">THYMER</p>
            <div className="project-description">
              <p>Plantr is an online gardening and outdoor decor service where you can create and plan your seasonal gardens based on regional variations and personal needs. </p>
              <div className="project-role">
                <b>ROLE: </b>
                <i>Software Engineer</i>
              </div>
            </div>
          </div>
        </div>
      </div>
*/
