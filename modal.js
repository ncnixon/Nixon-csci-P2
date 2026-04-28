// modal.js (starter template)
// Goal: Clicking a project card opens a modal and loads data from projects[index].

// TODO 1: Create an array of project objects.
// Each object should have: title, details, link_text, href

const projects = [
  {
    title: "Card 1",
    details: "Python Projects",
    link_text: "View Python Projects in GitHub",
    href: "https://example.com",
  },
  {
    title: "Card 2",
    details: "Web Design Projects",
    link_text: "View Web Design Projects in GitHub",
    href: "https://example.com",
  },
  {
    title: "Card 3",
    details: "JavaScript Projects",
    link_text: "View JavaScript Projects in GitHub",
    href: "https://example.com",
  },
  {
    title: "Card 4",
    details: "Data Science Projects",
    link_text: "View Data Science Projects in GitHub",
    href: "https://example.com",
  },
  {
    title: "Card 5",
    details: "Machine Learning Projects",
    link_text: "View Machine Learning Projects in GitHub",
    href: "https://example.com",
  },
  {
    title: "Card 6",
    details: "Artificial Intelligence Projects",
    link_text: "View Artificial Intelligence Projects in GitHub",
    href: "https://example.com",
  },
];

// TODO 2: Select your modal elements from the DOM and store them in variables
// Required variables:

const modal = document.querySelector(".modal");
const modal_title = modal ? modal.querySelector(".modal-title") : null;
const modal_details = modal ? modal.querySelector(".modal-details") : null;
const modal_link = modal ? modal.querySelector(".modal-link") : null;
const modal_close = modal ? modal.querySelector(".modal-close") : null;

// TODO 3: Select all project card buttons
const card_buttons = document.querySelectorAll(".project-card");

// Reminder: Each card button should have a shared class (e.g., .project-card) and a data-index attribute

function syncScrollLockToCardSelection() {
  if (!modal || !modal.open) {
    document.body.style.overflow = "";
  }
}

// TODO 4: Complete this function so it loads the correct project data and opens the modal

function openModalByIndex(index) {
  const project = projects[index];
  if (!project) return;
  if (!modal || !modal_title || !modal_details || !modal_link) return;

  
  // TODO 4a: Update your modal content here
  
  // modal_title.textContent = ?
  modal_title.textContent = project.title;
  modal_details.textContent = project.details;
  modal_link.textContent = project.link_text;
  modal_link.href = project.href;

  // TODO 4b: Open the modal with
  // modal.showModal()
  modal.showModal();

  // Disables background scrolling while the modal is open.
  document.body.style.overflow = "hidden";

  // Optional Enhancement: Focus the modal when it opens (requires tabindex="-1" on the dialog)
}

// This is what you should call in your click event handler for cards
// It contains some things we haven't talked about yet, so it is provided for you

function onCardClicked(event) {
  const clicked_card = event.currentTarget;
  const alreadySelected = clicked_card.classList.contains("is-flipped");
  const index = Number(clicked_card.dataset.index);

  card_buttons.forEach((card) => {
    card.classList.remove("is-flipped");
  });

  if (!alreadySelected) {
    clicked_card.classList.add("is-flipped");
  }

  if (!Number.isNaN(index)) {
    openModalByIndex(index);
  }

  syncScrollLockToCardSelection();
}

// TODO 5: Use a for loop to add a click event listener to each card in card_buttons
// and use
// onCardClicked
// as the click event's function

card_buttons.forEach((button) => {
  button.addEventListener("click", onCardClicked);
});

// TODO 6: Add a click event listener to the modal close button that uses the built-in
// modal.close() method

if (modal && modal_close) {
  modal_close.addEventListener("click", function () {
    modal.close();
  });
}

// Always restore body scroll when the modal is closed (no matter how it closes)
// NOTE: This line requires that you define the modal variable above.

if (modal) {
  modal.addEventListener("close", function () {
    syncScrollLockToCardSelection();
  });
}
