import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BecomeTasker = () => {
  const openAppStore = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <Header />

      {/* <!-- Hero Section --> */}
      <section class="container my-5">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <img
              src="https://www.taskrabbit.com/v3/assets/hero_landing-fdeb7ef8f1a4361ec76f75d007d79546.jpg"
              alt="Tasker"
              class="img-fluid rounded"
            />
          </div>
          <div class="col-lg-6 text-center text-lg-start">
            <h2>Earn money your way</h2>
            <p>See how much you can make tasking on TaskRabbit</p>
            <form>
              <div class="mb-3">
                <select class="form-select" required>
                  <option selected disabled>
                    Select your area
                  </option>
                  <option value="1">MET BKC Nashik</option>
                  <option value="2">Sadashiv Nagar</option>
                  <option value="3">Dwarka</option>
                  <option value="3">Mumbai Naka</option>
                </select>
              </div>
              <div class="mb-3">
                <select class="form-select" required>
                  <option selected disabled>
                    Choose a Category
                  </option>
                  <option value="1">Help Moving</option>
                  <option value="2">Cleaning</option>
                  <option value="3">Furniture Assembly</option>
                </select>
              </div>
              <div class="mb-3">
                <p>
                  <strong>250 rs</strong> per hour
                </p>
              </div>
              <button type="submit" class="btn btn-success w-100">
                Get started
              </button>
            </form>
            <p class="mt-3">
              Already have an account?
              <a href="#" class="text-decoration-underline">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </section>

  

      {/* <!-- Features Section --> */}
      <section class="container my-5">
        <h3 class="text-center mb-4">Flexible work, at your fingertips</h3>
        <div class="row text-center">
          <div class="col-md-4">
            <h5>Be your own boss</h5>
            <p>
              Work how, when, and where you want. Offer services in 50+
              categories.
            </p>
          </div>
          <div class="col-md-4">
            <h5>Set your own rates</h5>
            <p>Keep 100% of what you charge, plus tips! Get paid directly.</p>
          </div>
          <div class="col-md-4">
            <h5>Grow your business</h5>
            <p>
              We connect you with clients in your area and ways to market
              yourself.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Getting Started Section --> */}
      <section class="container my-5">
        <h3 class="text-center mb-4">Getting Started</h3>
        <div class="row text-center">
          <div class="col-md-4">
            <h6>1. Sign up</h6>
            <p>Create your account and download the Tasker app.</p>
          </div>
          <div class="col-md-4">
            <h6>2. Build your profile</h6>
            <p>Select services you want to offer and set your schedule.</p>
          </div>
          <div class="col-md-4">
            <h6>3. Verify eligibility</h6>
            <p>Confirm your identity and submit necessary documents.</p>
          </div>
        </div>
      </section>

      {/* <!-- FAQ Section --> */}
      <section class="bg-light py-5">
        <div class="container">
          <h3 class="text-center mb-4">Your questions, answered</h3>
          <div class="accordion" id="faqAccordion">
            <div class="accordion-item">
              <h2 class="accordion-header" id="faq1">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#answer1"
                  aria-expanded="true"
                >
                  What's required to become a Tasker?
                </button>
              </h2>
              <div id="answer1" class="accordion-collapse collapse show">
                <div class="accordion-body">
                  You need to meet local requirements and complete onboarding.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="faq2">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#answer2"
                >
                  How do I get jobs?
                </button>
              </h2>
              <div id="answer2" class="accordion-collapse collapse">
                <div class="accordion-body">
                  Clients in your area can find you on TaskRabbit and book
                  directly.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BecomeTasker;
