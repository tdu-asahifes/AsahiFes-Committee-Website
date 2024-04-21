window.onload = function(){
    // header
    // 追加するHTMLを定義
    var header_content = '<div class="fixed-top" id="fixed-top"><header class="navbar border-bottom z" style="background-color: #2d56a0;">'+
    '<div class="container">'+
      '<a class="navbar-brand" href="index.html">'+
        '<img src="materials/asahisai.png" class="logo" alt="学園祭ロゴ">'+
      '</a>'+
      '<!--<h1 class="blue">旭祭実行委員会</h1>-->'+
      '<!--<p class="text-black">サイトマップ</p>-->'+
    '</div>'+
  '</header>'+
  '<nav class="navbar navbar-expand-lg navbar-light border-bottom bar" id="bar" style="background-color: whitesmoke; color: #2d56a0;">'+
    '<div class="container">'+
      '<button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">'+
        '<span class="navbar-toggler-icon"></span>'+
      '</button>'+
  
      '<div class="collapse navbar-collapse" id="navbarNav">'+
        '<ul class="navbar-nav m-auto">'+
          '<li class="nav-item border-start border-end px-4 py-1">'+
            '<a class="nav-link" style="color: #2d56a0;" href="index.html">ホーム</a>'+
          '</li>'+
          '<li class="nav-item border-start border-end px-4 py-1">'+
            '<a class="nav-link" style="color: #2d56a0;" href="news.html">ニュース</a>'+
          '</li>'+
          '<li class="nav-item border-start border-end px-4 py-1">'+
            '<a class="nav-link" style="color: #2d56a0;" href="event.html">企画</a>'+
          '</li>'+
          '<li class="nav-item border-start border-end px-4 py-1">'+
            '<a class="nav-link" style="color: #2d56a0;" href="organization.html">参加団体</a>'+
          '</li>'+
          '<li class="nav-item border-start border-end px-4 py-1">'+
            '<a class="nav-link" style="color: #2d56a0;" href="access.html">アクセス・キャンパスマップ</a>'+
          '</li>'+
          '<li class="nav-item border-start border-end px-4 py-1">'+
            '<a class="nav-link" style="color: #2d56a0;" href="question.html">ご来場の皆様へ</a>'+
          '</li>'+
          '<li class="nav-item border-start border-end px-3">'+
            
            '<div class="dropdown">'+
              '<a class="nav-link dropdown-toggle py-2" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style="color: #2d56a0;">特設サイト</a>'+
              '<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">'+
                '<li><a class="dropdown-item" href="/access/tokyo_senju.html">新入生歓迎特設サイト</a></li>'+
                '<li><a class="dropdown-item" href="/access/saitama_hatoyama.html">旭祭本祭</a></li>'+
                '<li><a class="dropdown-item" href="/access/saitama_hatoyama.html">過去アーカイブ</a></li>'+
                '<li><a class="dropdown-item" href="/access/saitama_hatoyama.html#schoolbus">&nbsp;-&nbsp;スクールバスのご案内</a></li>'+
              '</ul>'+
            '</div>'+
          '</li>'+
        '</ul>'+
      '</div>'+
    '</div>'+
  '</nav></div>';
    var header = document.getElementById('header'); // 追加する部分を取得
    header.innerHTML = header_content; // innerHTMLでHTMLを追加


    // footer 
    var footer_content = '<footer class="text-white text-center py-5" style="background-color: #555555;">'+
    '<p>&copy; 2024 学園祭実行委員会. All Rights Reserved.</p>'+
    '</footer>'; // 追加するHTMLを定義
    var footer = document.getElementById('footer'); // 追加する部分を取得
    footer.innerHTML = footer_content; // innerHTMLでHTMLを追加

    var aside_content = 
    '<h2 class="text-center">最新情報</h2>'+
          '<div class="list-group">'+
            '<!-- お知らせ1 -->'+
            '<a href="#" class="list-group-item list-group-item-action">'+
              '<h6 class="mb-1">最新情報1</h6>'+
              '<p class="mb-1">最新の情報がここに表示されます。</p>'+
              '<small class="text-muted">更新日: 2024-02-15</small>'+
            '</a>'+
            '<!-- お知らせ2 -->'+
            '<a href="#" class="list-group-item list-group-item-action">'+
              '<h6 class="mb-1">ニュース2</h6>'+
              '<p class="mb-1">ニュースの内容がここに表示されます。</p>'+
              '<small class="text-muted">更新日: 2024-02-14</small>'+
            '</a>'+
            '<!-- お知らせ3 -->'+
            '<a href="#" class="list-group-item list-group-item-action">'+
              '<h6 class="mb-1">お知らせ3</h6>'+
              '<p class="mb-1">お知らせの詳細がここに表示されます。</p>'+
              '<small class="text-muted">更新日: 2024-02-13</small>'+
            '</a>'+
            '<a href="#" class="list-group-item list-group-item-action">'+
              '<h6 class="mb-1">最新情報1</h6>'+
              '<p class="mb-1">最新の情報がここに表示されます。</p>'+
              '<small class="text-muted">更新日: 2024-02-15</small>'+
            '</a>'+
            '<!-- お知らせ2 -->'+
            '<a href="#" class="list-group-item list-group-item-action">'+
              '<h6 class="mb-1">ニュース2</h6>'+
              '<p class="mb-1">ニュースの内容がここに表示されます。</p>'+
              '<small class="text-muted">更新日: 2024-02-14</small>'+
            '</a>'+
            '<!-- 他のお知らせを追加 -->'+
          '</div>'+

          '<h3>SNS</h3>'+
          'インスタ、ツイッター、ユーチューブのアイコン３つ';
    var aside = document.getElementById('aside');
    aside.innerHTML = aside_content;
}