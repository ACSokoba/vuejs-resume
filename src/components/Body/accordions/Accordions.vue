<template>
  <div>
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item mb-5 accordion-shadow">
        <h2 class="accordion-header" id="flush-headingOne">
          <button
            class="accordion-button collapsed custom-accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="true"
            aria-controls="flush-collapseOne"
          >
            <h3>Experience</h3>
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="flush-headingOne"
        >
          <div class="accordion-body">
            <div class="text-start mb-3">
              <b class="job-title">
                <span style="margin-right: 30px"
                  >Fullstack developer at Orange</span
                >
                <span class="badge bg-primary" style="font-size: 14px"
                  >jan 2020 - today</span
                >
              </b>
              <br /><br />
              <span>&#8226;</span> Fullstack developer on the digital customer
              area in an agile SAFe framework:
              <br />
              <span>&#8226;</span> Development, mainly front-end, of a dozen of
              customer journey on projects with important business value:
              Implementation of business needs, integration of UI / UX
              templates. Evolution on a modular Angular architecture:
              lazy-loading, one feature team one front-end module type of
              organization, structured CI/CD etc
              <br />
              <span>&#8226;</span> Backend development in NodeJS on a REST
              microservices architecture
              <br />
              <span>&#8226;</span> Code migration for Angular upgrades, bug
              fixes Refactoring, improvement of existing code, writing and
              implementation of unit tests and integration tests
              <br />
              <span>&#8226;</span> Helped with the onboarding of new interns /
              developers in the team in particular by writing a starter-kit
              <br /><br />
              <b>Technical environment : </b> Angular 11, Nodejs 14, Javascript,
              Typescript, Git, Html, CSS, Bootstrap, Jenkins, VsCode, Jest,
              Jasmine, Mocha, Protractor, Jira, Con
            </div>
            <div class="w-100 d-flex justify-content-center mb-3">
              <hr class="w-50" />
            </div>
            <div class="text-start">
              <b class="job-title">
                <span style="margin-right: 30px"
                  >Software developer internship at Orange</span
                >
                <span class="badge bg-primary" style="font-size: 14px"
                  >apr 2019 - sept 2019</span
                >
              </b>
              <br /><br />
              <span>&#8226;</span> Project to redesign a network data decoding
              application (ASN.1)<br />
              <span>&#8226;</span> Need analysis: functions of the existing
              application, new functions to be implemented, new GUI. <br />
              <span>&#8226;</span> Choice of MEAN Stack: MongoDB, Express,
              Angular, NodeJS <br />
              <span>&#8226;</span> UML modeling, class diagram <br />
              <span>&#8226;</span> Implementation of the abstract factory design
              pattern for reusability, durability and application flexibility
              <br />
              <br />
              <b>Technical environment : </b> Angular 8, Nodejs, Typescript,
              Git, Html 5, CSS Bootstrap 4, VsCode
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item accordion-shadow">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="true"
            aria-controls="flush-collapseTwo"
          >
            <h3>Education</h3>
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse collapse show"
          aria-labelledby="flush-headingTwo"
        >
          <div class="accordion-body">
            <div class="text-start">
              <b class="job-title">
                <span style="margin-right: 30px"
                  >Networks and Telecommunication Engineer at Institut
                  Galilée</span
                >
                <span class="badge bg-primary" style="font-size: 14px"
                  >2016 - 2019</span
                >
              </b>
              <br /><br />
              Major in Development of distributed applications
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./accordions.ts"></script>
<style src="./accordions.sass"></style>
