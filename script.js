let openModal = document.getElementById('openModal');
let modal = document.getElementById('modal');
let closeModal = document.getElementById('closeModal');
modal.style.display = 'none';
openModal.addEventListener('click', () => {
    modal.style.display = '';
})
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
let libser = document.getElementById('libser');
let vam = document.getElementById('vam');
let libruare = document.getElementById('libruare');
let libfac = document.getElementById('libfac');
let libcom = document.getElementById('libcom');
let libnews = document.getElementById('libnews');
let libprre = document.getElementById('libprre');
let libtim = document.getElementById('libtim');
let libcade = document.getElementById('libcade');
let libcol = document.getElementById('libcol');
let libst = document.getElementById('libst');
let clicklibnews = document.getElementById('clicklibnews');
let libsuberes = document.getElementById('libsuberes');
let clicklibser = document.getElementById('clicklibser');
let clickvam = document.getElementById('clickvam');
let clicklibruare = document.getElementById('clicklibruare');
let clicklibfac = document.getElementById('clicklibfac');
let clicklibsuberes = document.getElementById('clicklibsuberes');
let clicklibcom = document.getElementById('clicklibcom');
let clicklibprre = document.getElementById('clicklibprre');
let clicklibtim = document.getElementById('clicklibtim');
let clicklibcade = document.getElementById('clicklibcade');
let clicklibcol = document.getElementById('clicklibcol');
let clicklibst = document.getElementById('clicklibst');
// libser.style.display = 'none';
libsuberes.style.display = 'none';
libfac.style.display = 'none';
libnews.style.display = 'none';
libcom.style.display = 'none';
libprre.style.display = 'none';
libtim.style.display = 'none';
libcade.style.display = 'none';
libcol.style.display = 'none';
libst.style.display = 'none';
clicklibser.addEventListener('click', function(){
    libprre.style.display = 'none';
    libser.style.display = '';
    libcom.style.display = 'none';
    libtim.style.display = 'none';
    libcade.style.display = 'none';
    libcol.style.display = 'none';
});
clickvam.addEventListener('click', function(){
    libcade.style.display = 'none';
    vam.style.display = '';
    libtim.style.display = 'none';
    libst.style.display = 'none';
    libruare.style.display = '';
    libser.style.display = 'none';
    libcom.style.display = 'none';
    libcol.style.display = 'none';
    libprre.style.display = 'none';
});
clicklibruare.addEventListener('click', ()=>{
    libruare.style.display = '';
    libcade.style.display = 'none';
    libst.style.display = 'none';
    vam.style.display = '';
    libcom.style.display = 'none';
    libcol.style.display = 'none';
    libser.style.display = 'none';
    libprre.style.display = 'none';
    // libtim.style.display = 'none';
    libtim.style.display = 'none';
})
clicklibfac.addEventListener('click', function(){
    libtim.style.display = 'none';
    libst.style.display = 'none';
    libfac.style.display = '';
    libcom.style.display = 'none';
    libcade.style.display = 'none';
    libprre.style.display = 'none';
    libcol.style.display = 'none';
});
clicklibsuberes.addEventListener('click', function(){
    libcade.style.display = 'none';
    libst.style.display = 'none';
    libsuberes.style.display = '';
    libcol.style.display = 'none';
    libnews.style.display = 'none';
    libcom.style.display = 'none';
    libprre.style.display = 'none';
    libtim.style.display = 'none';
});
clicklibnews.addEventListener('click', function(){
    libst.style.display = 'none';
    libtim.style.display = 'none';
    libsuberes.style.display = 'none';
    libnews.style.display = '';
    libcom.style.display = 'none';
    libprre.style.display = 'none';
    libcade.style.display = 'none';
    libcol.style.display = 'none';
});
clicklibcom.addEventListener('click', function(){
    libcade.style.display = 'none';
    libser.style.display = 'none';
    libst.style.display = 'none';
    libnews.style.display = 'none';
    libsuberes.style.display = 'none';
    libcol.style.display = 'none';
    libcom.style.display = '';
    libprre.style.display = 'none';
    libtim.style.display = 'none';
});
clicklibprre.addEventListener('click', function(){
    libser.style.display = 'none';
    libnews.style.display = 'none';
    libst.style.display = 'none';
    libsuberes.style.display = 'none';
    libcom.style.display = 'none';
    libtim.style.display = 'none';
    libcol.style.display = 'none';
    libprre.style.display = '';
    libcade.style.display = 'none';
})
clicklibtim.addEventListener('click', function(){
    libprre.style.display = 'none';
    libtim.style.display = '';
    libser.style.display = 'none';
    libnews.style.display = 'none';
    libsuberes.style.display = 'none';
    libcom.style.display = 'none';
    libst.style.display = 'none';
    libcol.style.display = 'none';
    libcade.style.display = 'none';
});
clicklibcade.addEventListener('click', ()=>{
    libprre.style.display = 'none';
    libtim.style.display = 'none';
    libcol.style.display = 'none';
    libser.style.display = 'none';
    libnews.style.display = 'none';
    libsuberes.style.display = 'none';
    libcom.style.display = 'none';
    libcade.style.display = '';
    libst.style.display = 'none';
})
clicklibcol.addEventListener('click', function(){
    libprre.style.display = 'none';
    libtim.style.display = 'none';
    libcol.style.display = '';
    libser.style.display = 'none';
    libnews.style.display = 'none';
    libsuberes.style.display = 'none';
    libcom.style.display = 'none';
    libst.style.display = 'none';
    libcade.style.display = 'none';
});
clicklibst.addEventListener('click', function(){
    libprre.style.display = 'none';
    libtim.style.display = 'none';
    libcol.style.display = 'none';
    libser.style.display = 'none';
    libnews.style.display = 'none';
    libsuberes.style.display = 'none';
    libcom.style.display = 'none';
    libcade.style.display = 'none';
    libst.style.display = '';
})