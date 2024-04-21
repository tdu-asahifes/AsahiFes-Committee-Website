 // ページが読み込まれた後に高さを取得し、空白の高さを設定
 window.addEventListener('load', function () {
    const headerHeight = document.getElementById('fixed-top').offsetHeight;
    const spacer = document.getElementById('spacer');
    spacer.style.height = `${headerHeight}px`;
});

// ウィンドウがリサイズされたときに高さを再計算
window.addEventListener('resize', function () {
    const headerHeight = document.getElementById('fixed-top').offsetHeight;
    const spacer = document.getElementById('spacer');
    spacer.style.height = `${headerHeight}px`;
});
    
  