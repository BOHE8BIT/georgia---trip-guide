document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('[data-place]');
  const googleMapLink = (text) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(text)}`;

  links.forEach((el) => {
    const place = el.dataset.place;
    if (!place) return;
    el.href = googleMapLink(place);
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });

  const chips = document.querySelectorAll('.map-chip');
  chips.forEach((chip) => {
    const place = chip.dataset.place;
    chip.href = googleMapLink(place);
    chip.target = '_blank';
    chip.rel = 'noopener noreferrer';
  });
});
