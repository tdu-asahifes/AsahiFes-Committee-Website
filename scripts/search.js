const lists = [
    { day:'両', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
    { day:'', place: '', roomid:'', Affiliation: '', keyword: '', name: '', namein: '', text: '' },
  ];//部屋番号（number）と団体名、紹介文を追加

// チェックボックスの状態を確認する関数
function checkCheckboxes() {
    
    const checkbox = [];
    const hairetu1 = ['1号館', '2号館', '3号館', '4号館', '5号館', 'キャンパスプラザ'];
    const hairetu2 = ['工学部', 'システムデザイン学科', '未来科学部', '研究室', 'サークル'];
    const hairetu3 = ['展示', '体験', '屋台', 'パフォーマンス'];
    let targetDays = [];
    let a = [];
    let b = [];
    let c = [];

    for (let i = 1; i <= 17; i++) {
        checkbox[i] = document.getElementById(`checkbox${i}`);
    }
    
    // チェックボックスが選択されているかどうかを確認 両日行われているものはどう表示するか？例えば、0とつけておくとか？
    if (checkbox[1].checked && checkbox[2].checked) {
        targetDays = ['3', '4','両'];
    } else if(checkbox[1].checked) {
        targetDays = ['3'];
    } else if(checkbox[2].checked){
        targetDays = ['4'];
    } else{
        targetDays = ['3', '4','両'];
    }

    // チェックボックスの状態に応じて配列に追加
    for (let i = 3; i <= 8; i++) {
        if (checkbox[i].checked) {
        a.push(...hairetu1.filter(item => item === hairetu1[i - 3]));
        }
    }
    // 重複を除去して新しい配列を作成
    a = [...new Set(a)];
    // aが空の場合にデフォルトの配列を代入
    if (a.length === 0) {
        a = hairetu1;
    }

    // チェックボックスの状態に応じて配列に追加
    for (let i = 9; i <= 13; i++) {
        if (checkbox[i].checked) {
        b.push(...hairetu2.filter(item => item === hairetu2[i - 9]));
        }
    }
    // 重複を除去して新しい配列を作成
    b = [...new Set(b)];
    // aが空の場合にデフォルトの配列を代入
    if (b.length === 0) {
        b = hairetu2;
    }

    // チェックボックスの状態に応じて配列に追加
    for (let i = 14; i <= 17; i++) {
        if (checkbox[i].checked) {
        c.push(...hairetu3.filter(item => item === hairetu3[i - 14]));
        }
    }
    // 重複を除去して新しい配列を作成
    c = [...new Set(c)];
    // aが空の場合にデフォルトの配列を代入
    if (c.length === 0) {
        c = hairetu3;
    }


    // 選択する条件を変数にした場合　
    const selectedItems = lists.filter(item => targetDays.includes(item.day) && a.includes(item.place) && b.includes(item.Affiliation) && c.includes(item.keyword));

    // HTMLに表示するための文字列を作成　ここで装飾も出来るだけする。
    const htmlString = selectedItems.map(item => `
        <div class="col-md-3">
            <div class="card">
            <img src="https://via.placeholder.com/150" class="card-img-top" alt="Photo 1">
            <!--<img src="../materials/organization/${item.namein}.jpg" class="card-img-top" alt="Photo 1">-->
            <p>${item.day}日/ ${item.place}<br>「${item.name}」</p>
            </div>
        </div>
        `).join('');

    // HTMLを表示する
    document.getElementById('output').innerHTML = htmlString;

}

//フロアマップにも同じものを移植して