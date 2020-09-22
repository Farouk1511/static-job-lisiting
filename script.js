const container = document.getElementById("container");
const jobListingRight = document.getElementById("job-lisiting-right");



fetch("./data.json")
  .then((result) => result.json())
  .then((data) => {
      renderUI(data)
  });

function renderUI(data) {
  for (var i = 0; i < data.length; i++) {
    var job = data[i];

    var html = `<div class="job-container ${
      job.featured ? "show" : ""
    }" id="job-${job.id}"><div class="job-listing-left"><img src="${
      job.logo
    }" alt="${job.company}"><div class="main-content"><p class="job-company">${
      job.company
    } <span class="new ${
      job.new ? "show" : ""
    }">New! </span><span class="featured ${
      job.featured ? "show" : ""
    }">Featured</span></p><h1 class="job-title">${
      job.position
    }</h1><p class="job-details">${job.postedAt} &bull; ${
      job.contract
    } &bull; ${
      job.location
    }</p></div></div><div class="job-lisitng-right" id="job-listing-right"><ul><li>${
      job.role
    }</li> <li>${job.level}</li> ${job.languages
      .map((language) => `<li>${language}</li>`)
      .join("")} ${job.tools
      .map((tool) => `<li>${tool}</li>`)
      .join("")}</ul></div></div>`;
    container.insertAdjacentHTML("beforeend", html);
  }
}




