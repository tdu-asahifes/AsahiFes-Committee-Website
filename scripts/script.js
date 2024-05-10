// モーダルウィンドウを表示する関数  今は使ってない
//head要素を取得
const head = document.head;

//最初の子要素の前に'<title>'+を追加
head.insertAdjacentHTML('afterBegin', '');

//最後の子要素の後に'<title>'+を追加
head.insertAdjacentHTML('beforeEnd',
'<meta charset="UTF-8">'+
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+

    '<!--アイコン-->'+
    '<link rel="icon" type="image/ico" href="materials/asahi.ico">'+

    '<!--ブートストラップ-->'+
    '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">'+
        '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet">'+

        '<!-- Popper.js -->'+
        '<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js">'+'</script>'+
    
        '<!-- Bootstrap JS (including Popper.js) -->'+
        '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js">'+'</script>'+

    '<!--cssのパス-->'+
    '<link rel="stylesheet" href="styles/style.css">'+

    '<!-- SEO対策 -->'+
    '<meta property="og:image" content="https://www.sg.dendai.ac.jp/s1j-asahisai/material/top.png" />'+
    '<meta name="twitter:card" content="summary_large_image">'+
    '<meta name="twitter:site" content="@asahisai">'+
    '<meta name="description" content="東京電機大学東京千住キャンパス学園祭  旭祭実行委員会の公式HPです">'+
    '<meta property="og:title" content="旭祭実行委員会 | 東京電機大学東京千住キャンパス">'+
    '<meta property="og:url" content="http://www.sg.dendai.ac.jp/s1j-asahisai/index.html">'+
    '<meta property="og:type" content="website">'+
    '<meta property="og:site_name" content="東京電機大学旭祭実行委員会公式">'+
    '<META name="keywords" content="旭祭,東京電機大学,電大,tdu,東京電機大学学園祭,学園祭,文化祭,東京千住キャンパス,">'+

    '<script src="scripts/specer.js"></script>'+
    
    '<script async src="https://www.googletagmanager.com/gtag/js?id=G-47C8XLB4N6"></script>'+
    '<script>'+
       'window.dataLayer = window.dataLayer || [];'+
        'function gtag() { dataLayer.push(arguments); }'+
        "gtag('js', new Date());"+

        "gtag('config', 'G-47C8XLB4N6');"+
    '</script>'
);
