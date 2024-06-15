// 초기에 한 번 실행할 함수 정의
function updateCardWidth() {
    // 현재 창의 너비를 가져옴
    const windowWidth = window.innerWidth;
  
    // 너비를 기반으로 계산
    const adjustedWidth = Math.floor(windowWidth - 260);
    const Nw = Math.floor(adjustedWidth / 360);
    const Ntw = Math.floor(adjustedWidth - (Nw+1) * 40 + 10);
    const Nnw = Math.floor(Ntw / Nw);
    const Nnh = Math.floor(Nnw / 3 * 2)
  
    // 각 카드 요소에 스타일 적용
    document.querySelectorAll('.card').forEach(element => {
      element.style.width = Nnw + 'px';
      element.style.height = Nnh + 'px';
    });

    document.querySelectorAll('.card_img').forEach(element => {
        element.style.width = (Nnw -20) + 'px';
        element.style.height = (Nnh -20) + 'px';
      });
  
    // 디버깅을 위해 콘솔에 출력
    console.log('Window Width:', windowWidth);
    console.log('Adjusted Width:', adjustedWidth);
    console.log('Nw:', Nw);
    console.log('Nnw:', Nnw);
  }
  
  // 페이지 로드시 한 번 실행
  updateCardWidth();

  // 창 크기 변경 시에도 실행되도록 이벤트 리스너 등록
  window.addEventListener('resize', updateCardWidth);


  