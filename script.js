function openModal(title, details) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-details").innerText = details;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// For skill cards, toggle their details
function toggleDetails(card) {
    const details = card.querySelector('.skill-details');
    if (details) {
        details.classList.toggle('active');
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    } else {
        const title = card.querySelector('h3').innerText;
        const jobDetails = card.querySelector('.job-details').innerText;
        openModal(title, jobDetails);
    }
}