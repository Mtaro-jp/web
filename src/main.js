// CSSのインポートを削除
document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".js-lazyload-video");

    videos.forEach(video => {
        video.addEventListener('loadedmetadata', function() {
            this.playbackRate = 1.5;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const weaponItems = document.querySelectorAll('.weapon-item');

    // 武器切り替え処理
    weaponItems.forEach(item => {
        item.addEventListener('click', () => {
            // アクティブな武器のクラスを削除
            document.querySelector('.weapon-item.active').classList.remove('active');
            // クリックされた武器をアクティブに
            item.classList.add('active');

            // 武器セクションの切り替え
            document.querySelector('.weapon-section.active').classList.remove('active');
            document.getElementById(item.dataset.weapon).classList.add('active');
        });
    });

    // ビデオの再生速度設定
    const videos = document.querySelectorAll('.js-lazyload-video');
    videos.forEach(video => {
        video.addEventListener('loadedmetadata', function() {
            this.playbackRate = 1.5;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const selectedWeapon = document.querySelector('.selected-weapon');
    const weaponDropdown = document.querySelector('.weapon-dropdown');
    const weaponOptions = document.querySelectorAll('.weapon-option');

    // 選択された武器を表示
    function switchWeapon(weaponId) {
        document.querySelector('.weapon-section.active').classList.remove('active');
        document.getElementById(weaponId).classList.add('active');
    }

    // 選択された武器の表示を更新
    function updateSelectedWeapon(option) {
        const img = option.querySelector('img');
        const span = option.querySelector('span');
        selectedWeapon.innerHTML = `
            <img src="${img.src}" alt="${img.alt}">
            <span>${span.textContent}</span>
        `;
    }

    // ドロップダウンの表示/非表示
    selectedWeapon.addEventListener('click', () => {
        weaponDropdown.classList.toggle('show');
    });

    // 武器選択時の処理
    weaponOptions.forEach(option => {
        option.addEventListener('click', () => {
            updateSelectedWeapon(option);
            switchWeapon(option.dataset.weapon);
            weaponDropdown.classList.remove('show');
        });
    });

    // 外部クリックでドロップダウンを閉じる
    document.addEventListener('click', (e) => {
        if (!selectedWeapon.contains(e.target) && !weaponDropdown.contains(e.target)) {
            weaponDropdown.classList.remove('show');
        }
    });
});
