// ページの準備が完了してから実行
document.addEventListener('DOMContentLoaded', () => {
    /* =========================================
       1. 時間帯メッセージ＆色変更機能
       ========================================= */
    const hour = new Date().getHours();
    const textElement = document.querySelector('.loading-text');
    
    // loading-textがある場合のみ実行（エラー防止）
    if (textElement) {
        // メッセージリスト
        const midnightMsgs = ["While the world sleeps.", "While logic floats in air.", "While the garbage collects.", "While the diet starts tomorrow."];
        const morningMsgs = ["While the coffee brews.", "While the system boots.", "While the birds sing.", "While the cache clears."];
        const dayMsgs = ["While the code compiles.", "While I look busy.", "While the pixels fight.", "While reality continues."];
        const sunsetMsgs = ["While the sky burns.", "While the shadows lengthen.", "While switching to dark mode.", "While the train rattles."];
        const nightMsgs = ["While the cursor blinks.", "While the cat judges me.", "While the GPU renders.", "While the music plays."];

        let message = "";
        let color = "#ffffff";

        function getRandom(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }

        if (hour >= 0 && hour < 5) { 
            message = getRandom(midnightMsgs);
            color = "#a29bfe"; 
        } else if (hour >= 5 && hour < 9) { 
            message = getRandom(morningMsgs); 
            color = "#81ecec"; 
        } else if (hour >= 9 && hour < 17) { 
            message = getRandom(dayMsgs); 
            color = "#ffeaa7"; 
        } else if (hour >= 17 && hour < 20) { 
            message = getRandom(sunsetMsgs); 
            color = "#ff7675"; 
        } else { 
            message = getRandom(nightMsgs); 
            color = "#74b9ff"; 
        }

        textElement.innerText = message;
        textElement.style.color = color;
        textElement.style.textShadow = `0 0 10px ${color}, 0 2px 4px rgba(0,0,0,0.8)`;
    }

    /* =========================================
       2. ナビゲーションの現在地ハイライト機能 (New!)
       ========================================= */
    // 現在のURLを取得
    const currentUrl = window.location.href;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        // リンク先と現在のURLが一致したらクラスをつける
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
});
