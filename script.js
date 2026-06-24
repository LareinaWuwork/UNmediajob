const jobs = [
  {
    title: "Communication Officer",
    organization: "UNDP",
    location: "Bangkok, Thailand",
    category: "Communications",
    deadline: "30 June 2026",
    url: "https://jobs.undp.org/"
  },
  {
    title: "Public Information Officer",
    organization: "United Nations Secretariat",
    location: "New York, USA",
    category: "Public Information",
    deadline: "5 July 2026",
    url: "https://careers.un.org/"
  },
  {
    title: "Social Media Specialist",
    organization: "UNICEF",
    location: "Geneva, Switzerland",
    category: "Digital / Social Media",
    deadline: "12 July 2026",
    url: "https://jobs.unicef.org/"
  }
];

const grid = document.getElementById("jobsGrid");
const searchInput = document.getElementById("searchInput");
const buttons = document.querySelectorAll(".filters button");
const jobCount = document.getElementById("jobCount");
const lastUpdated = document.getElementById("lastUpdated");

let currentFilter = "All";

function renderJobs() {
  const search = searchInput.value.toLowerCase();

  const filteredJobs = jobs.filter(job => {
    const matchesFilter = currentFilter === "All" || job.category === currentFilter;

    const matchesSearch =
      job.title.toLowerCase().includes(search) ||
      job.organization.toLowerCase().includes(search) ||
      job.location.toLowerCase().includes(search);

    return matchesFilter && matchesSearch;
  });

  grid.innerHTML = "";

  filteredJobs.forEach(job => {
    grid.innerHTML += `
      <article class="job-card">
        <span class="tag">${job.category}</span>
        <h2>${job.title}</h2>
        <p><strong>Organization:</strong> ${job.organization}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p class="deadline">Deadline: ${job.deadline}</p>
        <a href="${job.url}" target="_blank">View position →</a>
      </article>
    `;
  });

  jobCount.textContent = `${filteredJobs.length} roles found`;
  lastUpdated.textContent = `Last updated: ${new Date().toLocaleDateString()}`;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderJobs();
  });
});

searchInput.addEventListener("input", renderJobs);

renderJobs();
