const btn=document.querySelector('.menu-btn');const nav=document.querySelector('nav');btn?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.flexDirection='column';nav.style.position='absolute';nav.style.top='72px';nav.style.right='4%';nav.style.background='#fff';nav.style.padding='18px';nav.style.borderRadius='12px';nav.style.boxShadow='0 10px 30px #0002'});
function toggleACGallery() {
  const acMore = document.getElementById('acGalleryMore');
  const allGalleryItems = document.querySelectorAll('.gallery > .gallery-item');

  if (acMore.style.display === 'none' || acMore.style.display === '') {
    acMore.style.display = 'grid';

    allGalleryItems.forEach(item => {
      if (!item.classList.contains('ac-gallery')) {
        item.style.display = 'none';
      }
    });
  } else {
    acMore.style.display = 'none';

    allGalleryItems.forEach(item => {
      item.style.display = 'block';
    });
  }
}
