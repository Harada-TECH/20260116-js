const containerSnow = document.querySelector('#particle-container');

const createParticle = () => {
  // div.particle 要素を作成
  const particle = document.createElement('div');
  particle.classList.add('particle');

  // ランダムな位置を設定
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.top = `${Math.random() * 100}vh`;

  // コンテナに追加
  containerSnow.appendChild(particle);

  // 一定時間(5秒)後に削除
  setTimeout(() => {
    particle.remove();
  }, 5000);
}

// 一定間隔(0.2秒毎)で粒子を作成
setInterval(createParticle, 200);