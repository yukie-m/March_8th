import React from "react";
import "../scss/about.scss";

function About() {
  return (
    <>
      <div className="about-wrapper">
        <hr />
        <div className="about-header">
          <h1>About This Project</h1>
          <p>Formative Project 3.1 - </p>
          <h4>FORMATIVE PROJECT OVERVIEW FRONT-END CLIENT APP </h4>
        </div>
        <div className="me">
          <p>Student Name:</p>
          <p>Yukie Matsumoto</p>
        </div>
        <div className="objective">
          <hr />
          <h4>Objectives</h4>
          <h5>For this project, you should be able to: </h5>
          <ul>
            <li>Use an external API to produce a web interface </li>
            <li>
              Utilise a Javascript framework or User Interface Library to
              produce an industry standard single page application{" "}
            </li>
            <li>Optimise a client-side application for production </li>
          </ul>
        </div>
        <div className="overview-wrapper">
          <h4>Overview</h4>
          <div className="row">
            <p>
              Utilise a Javascript framework or User Interface Library to create
              a single page application that allows the user to browse items
              retrieved from an external API. The app will be a news app that
              allows users to view news stories from around the world. It will
              use the News API (https://newsapi.org) The basic use cases for the
              application are:{" "}
            </p>
            <ul>
              <li>View Article List </li>
              <li>
                View About Page (about the developer, you, and this project){" "}
              </li>
            </ul>
          </div>
          <div className="row">
            <p>
              The application can be extended with the following use cases:{" "}
            </p>
            <ul>
              <li>Search Articles by Search Term </li>
              <li>Filter Articles by Country or Category or Source </li>
            </ul>
          </div>
          <div className="row">
            <p>
              The application should take advantage of the built-in features of
              the Javascript framework. Where features don't exist, you can use
              third party libraries. Use the framework and any number of
              libraries to:{" "}
            </p>
            <ul>
              <li>
                Implement navigation to different screens Handle XMLHttpRequests
                (requests to the News API server){" "}
              </li>
              <li>
                Create components that communicate with each other. For example,
                the component that allows the user to filter articles could
                communicate with the list component{" "}
              </li>
              <li>Implement styles </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
