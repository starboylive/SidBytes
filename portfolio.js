document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".portfolio-container");

  fetch("./portfolio.json")
    .then(res => {
      if (!res.ok) throw new Error("JSON not found");
      return res.json();
    })
    .then(data => {
      data.forEach(item => {
        const isUnderDevelopment = Object.prototype.hasOwnProperty.call(item, 'underDevelopment')
          ? Boolean(item.underDevelopment)
          : /under development/i.test(item.title);
        const card = document.createElement("div");
        card.className = `portfolio-card${isUnderDevelopment ? " portfolio-card--dev" : ""}`;

        card.innerHTML = `
          <a href="${item.url}" target="_blank" class="card-link">
          <div class="portfolio-title">${item.title}</div>
          <div class="portfolio-desc">${item.description}</div>
          <div class="tech-stack">
            ${item.tech.map(t => `<span class="tech">${t}</span>`).join("")}
          </div>
          </a>
        `;

        container.appendChild(card);
      });
    })
    .catch(err => {
      container.innerHTML = "<p style='color:red'>Portfolio failed to load</p>";
      console.error(err);
    });
});

        const dropdownBtn = document.getElementById("more-btn");
        const dropdownContent = document.getElementById("dropdown-content");

        // Toggle visibility when clicking the button
        dropdownBtn.addEventListener("click", () => {
            dropdownContent.classList.toggle("show");
        });

        // Close the dropdown if the user clicks outside of it
        window.addEventListener("click", (event) => {
            if (!event.target.matches('.more-btn')) {
                if (dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                }
            }
        });
