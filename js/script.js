// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns() {
  filterBtns.each(function () {
    $(this).removeClass('active-filter-btn');
  });
}

function performSearch() {
  var searchTerm = document.getElementById('searchInput').value.toLowerCase();
  var collectionElement = document.getElementById('collection');
  var paragraphs = collectionElement.getElementsByTagName('p');
  var regex = new RegExp('\\b' + searchTerm + '\\b', 'gi');
  for (var i = 0; i < paragraphs.length; i++) {
    var paragraphText = paragraphs[i].innerText.toLowerCase();
    var matches = paragraphText.match(regex);
    if (matches) {
      var parentDiv = paragraphs[i].closest('.content');

      if (parentDiv) {
        parentDiv.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        return;
      }
    }
  }

  alert('Kata kunci tidak ditemukan.');
}
