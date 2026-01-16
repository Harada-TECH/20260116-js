window.addEventListener('load', () => {
  // ローディング要素を取得
  const loadingElement = document.querySelector('#loading');

  // ローディングが完了したらクラスを付与
  loadingElement.classList.add('loaded');
});