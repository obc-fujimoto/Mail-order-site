//商品リスト
const products = [
    {id: 1, name: 'テレビ', price: 140000, popularity: 120,image:'img/000000081207_ldln7Tj.jpg'},
    {id: 1, name: '冷蔵庫', price: 170000, popularity: 180,image:'img/000000082475_OSjO7af.jpg'},
    {id: 1, name: '洗濯機', price: 43000, popularity: 200,image:'img/000000085897_hpxQ9te.jpg'},
    {id: 1, name: 'エアコン', price: 200000, popularity: 100,image:'img/000000084909_7qoCIWF.jpg'},
    {id: 1, name: '電子レンジ', price: 37000, popularity: 150,image:'img/000000082773_58iENYo.jpg'},
];

//商品リストを描画する関数
function displayProducts(products){
	const product_list = document.getElementById('product-list');
	product_list.innerHTML = ''; // product-listの中身を空っぽにする

	products.forEach(product => {
		const product_item = document.createElement('div');
		product_item.classList.add('product-item');
		product_item.innerHTML = `
        <div class="product-item__img">
            <a href="#">
                <img src="${product.image}" alt="${product.name}" width="250" height="250">
            </a>
        </div>
        <h3 class="product-item__name">
            <a href="#">${product.name}</a>
        </h3>
        <p>${product.price.toLocaleString()}円</p>
    `;
		product_list.appendChild(product_item);
	});
}

// 初期表示、または検索などをかけた際の商品の数の表示
function HowManyProducts(){
	const product_total = document.getElementsByClassName('product-item').length;
	document.getElementById('total-items').textContent = `全${product_total}件`;
}

// 関数の実行
displayProducts(products);
HowManyProducts();

//並び替えの処理
document.getElementById('sort').addEventListener('change',function(e){
    const sort_value =e.target.value;
    let sorted_products = [...products];

    if(sort_value === 'price-asc'){
        sorted_products.sort((a,b) => a.price - b.price);
    }else if(sort_value === 'price-desc'){
        sorted_products.sort((a,b) => b.price - a.price);
    } else if (sort_value === 'popularity') { // 人気順ソート条件追加
        sorted_products.sort((a, b) => b.popularity - a.popularity);
    }
    displayProducts(sorted_products);
    HowManyProducts(); // 商品数を再表示
});

//商品名でのフィルタリング処理
document.getElementById('search').addEventListener
('input',function(e){
    const search_value = e.target.value.toLowerCase();
    const filtered_products = products.filter(product => 
        product.name.toLowerCase().includes(search_value)
    );
    displayProducts(filtered_products);
    HowManyProducts();
})