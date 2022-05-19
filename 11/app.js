let currentPage = 1;
let searchString = '';
let posts = [];

const url = `https://dapi.kakao.com/v2/search/web?query=#query&page=${currentPage}&size=15`;
const $docs = document.querySelector('#docs');

const $searchButton = document.querySelector('#searchButton');
const $searchForm = document.querySelector('#searchForm');
const $query = document.querySelector('[name="query"]');
const $button = document.querySelector('#see-more');

function getFetch(url, callback) {
  const headers = {
    Authorization: 'KakaoAK ad1eb3ae6a7731c9d17a6c0f88a5fed6',
  };

  fetch(url, { headers })
    .then(response => response.json())
    .then(data => callback(data));
}

function search() {
  const query = $query.value;
  const searchUrl = url.replace('#query', query);
  
    if (query !== searchString) {
        currentPage = 1;
        searchString = query;
        posts = [];
    }
  
   getFetch(searchUrl, data => {

    const { documents } = data;

    const docs = documents.map(document => {
      return document.contents;
    });
    
     posts = [...posts, ...docs];

     if (posts.length) $button.style.display = 'block';
     else $button.style.display = 'none';
     
      $docs.innerHTML = `<ol>${ posts.map(d => `<li>${d}</li>`).join('') }</ol>`;
   });
}

$searchForm.addEventListener('submit', event => {
  search();
  event.preventDefault();
});

$button.addEventListener('click', () => {
  currentPage++;
  search();
});
