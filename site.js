function updateCardWidth() {
    const windowWidth = window.innerWidth;
  
    const adjustedWidth = Math.floor(windowWidth - 260);
    const Nw = Math.floor(adjustedWidth / 360);
    const Ntw = Math.floor(adjustedWidth - (Nw+1) * 40 + 10);
    const Nnw = Math.floor(Ntw / Nw);
    const Nnh = Math.floor(Nnw / 3 * 2)
  
    document.querySelectorAll('.card').forEach(element => {
      element.style.width = Nnw + 'px';
      element.style.height = Nnh + 'px';
    });

    document.querySelectorAll('.card_img').forEach(element => {
        element.style.width = (Nnw -20) + 'px';
        element.style.height = (Nnh -20) + 'px';
      });
  
    console.log('Window Width:', windowWidth);
    console.log('Adjusted Width:', adjustedWidth);
    console.log('Nw:', Nw);
    console.log('Nnw:', Nnw);
  }
  
  updateCardWidth();

  window.addEventListener('resize', updateCardWidth);

function newPage(adress)  {
  window.location.href = adress
}



