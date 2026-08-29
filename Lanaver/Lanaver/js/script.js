const products = [
  // ATASAN PRIA — 5 foto berbeda
  {id:1,name:'Kemeja Oxford Essential',cat:'Atasan Pria',price:150000,image:'https://images.pexels.com/photos/16100489/pexels-photo-16100489.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:2,name:'Kemeja Studio White',cat:'Atasan Pria',price:300000,image:'https://images.pexels.com/photos/16941802/pexels-photo-16941802.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:3,name:'Overshirt Everyday',cat:'Atasan Pria',price:450000,image:'https://images.pexels.com/photos/18148698/pexels-photo-18148698.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:4,name:'Polo Signature',cat:'Atasan Pria',price:600000,image:'https://images.pexels.com/photos/16941809/pexels-photo-16941809.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:5,name:'T-Shirt Clean Cut',cat:'Atasan Pria',price:750000,image:'https://images.pexels.com/photos/16941801/pexels-photo-16941801.jpeg?auto=compress&cs=tinysrgb&w=900'},

  // BAWAHAN PRIA — 5 foto berbeda
  {id:6,name:'Trousers Tailored Black',cat:'Bawahan Pria',price:150000,image:'https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=900'},
  {id:7,name:'Chino Straight Fit',cat:'Bawahan Pria',price:300000,image:'https://images.pexels.com/photos/447570/pexels-photo-447570.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:8,name:'Pleated Trousers',cat:'Bawahan Pria',price:450000,image:'https://images.pexels.com/photos/6766385/pexels-photo-6766385.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:9,name:'Relaxed Pants',cat:'Bawahan Pria',price:600000,image:'https://images.pexels.com/photos/5155762/pexels-photo-5155762.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:10,name:'Denim Straight',cat:'Bawahan Pria',price:750000,image:'https://images.pexels.com/photos/5103042/pexels-photo-5103042.jpeg?auto=compress&cs=tinysrgb&w=900'},

  // ATASAN WANITA — 5 foto berbeda
  {id:11,name:'Blouse Studio White',cat:'Atasan Wanita',price:150000,image:'https://images.pexels.com/photos/32672102/pexels-photo-32672102.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:12,name:'Shirt Soft Tailoring',cat:'Atasan Wanita',price:300000,image:'https://images.pexels.com/photos/32661329/pexels-photo-32661329.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:13,name:'Knit Minimal Top',cat:'Atasan Wanita',price:450000,image:'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:14,name:'Overshirt Relaxed',cat:'Atasan Wanita',price:600000,image:'https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:15,name:'Classic Button-Up',cat:'Atasan Wanita',price:750000,image:'https://images.pexels.com/photos/4350108/pexels-photo-4350108.jpeg?auto=compress&cs=tinysrgb&w=900'},

  // BAWAHAN WANITA — 5 foto berbeda
  {id:16,name:'Tailored Black Pants',cat:'Bawahan Wanita',price:150000,image:'https://images.pexels.com/photos/7203477/pexels-photo-7203477.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:17,name:'Wide Leg Trousers',cat:'Bawahan Wanita',price:300000,image:'https://images.pexels.com/photos/19995460/pexels-photo-19995460.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:18,name:'Straight Denim',cat:'Bawahan Wanita',price:450000,image:'https://images.pexels.com/photos/31248951/pexels-photo-31248951.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:19,name:'Pleated Midi Skirt',cat:'Bawahan Wanita',price:600000,image:'https://images.pexels.com/photos/7202826/pexels-photo-7202826.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:20,name:'Everyday Jeans',cat:'Bawahan Wanita',price:750000,image:'https://images.pexels.com/photos/7202819/pexels-photo-7202819.jpeg?auto=compress&cs=tinysrgb&w=900'},

  // SEPATU FORMAL PRIA — 10 FOTO BERBEDA
  {id:21,name:'Oxford Leather Black',cat:'Sepatu Formal Pria',price:450000,image:'https://images.pexels.com/photos/12210270/pexels-photo-12210270.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:22,name:'Classic Derby',cat:'Sepatu Formal Pria',price:600000,image:'https://images.pexels.com/photos/35641834/pexels-photo-35641834.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:23,name:'Penny Loafer',cat:'Sepatu Formal Pria',price:750000,image:'https://images.pexels.com/photos/12210271/pexels-photo-12210271.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:24,name:'Monk Strap Leather',cat:'Sepatu Formal Pria',price:900000,image:'https://images.pexels.com/photos/37465528/pexels-photo-37465528.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:25,name:'Cap Toe Oxford',cat:'Sepatu Formal Pria',price:1050000,image:'https://images.pexels.com/photos/33039735/pexels-photo-33039735.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:26,name:'Wholecut Leather',cat:'Sepatu Formal Pria',price:450000,image:'https://images.pexels.com/photos/31844638/pexels-photo-31844638.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:27,name:'Brogue Classic',cat:'Sepatu Formal Pria',price:600000,image:'https://images.pexels.com/photos/9992898/pexels-photo-9992898.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:28,name:'Tassel Loafer',cat:'Sepatu Formal Pria',price:750000,image:'https://images.pexels.com/photos/26587826/pexels-photo-26587826.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:29,name:'Polished Dress Shoe',cat:'Sepatu Formal Pria',price:900000,image:'https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:30,name:'Minimal Leather Slip-On',cat:'Sepatu Formal Pria',price:1050000,image:'https://images.pexels.com/photos/28157683/pexels-photo-28157683.jpeg?auto=compress&cs=tinysrgb&w=900'},

  // SEPATU FORMAL WANITA — 10 FOTO BERBEDA
  {id:31,name:'Classic Black Pumps',cat:'Sepatu Formal Wanita',price:450000,image:'https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:32,name:'Pointed Slingback',cat:'Sepatu Formal Wanita',price:600000,image:'https://images.pexels.com/photos/6153885/pexels-photo-6153885.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:33,name:'Leather Loafer',cat:'Sepatu Formal Wanita',price:750000,image:'https://images.pexels.com/photos/9082613/pexels-photo-9082613.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:34,name:'Mary Jane Classic',cat:'Sepatu Formal Wanita',price:900000,image:'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:35,name:'Kitten Heel',cat:'Sepatu Formal Wanita',price:1050000,image:'https://images.pexels.com/photos/16459696/pexels-photo-16459696.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:36,name:'Block Heel',cat:'Sepatu Formal Wanita',price:450000,image:'https://images.pexels.com/photos/1707271/pexels-photo-1707271.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:37,name:'Pointed Flat',cat:'Sepatu Formal Wanita',price:600000,image:'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:38,name:'Elegant Mule',cat:'Sepatu Formal Wanita',price:750000,image:'https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:39,name:'Ankle Boot',cat:'Sepatu Formal Wanita',price:900000,image:'https://images.pexels.com/photos/7203892/pexels-photo-7203892.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:40,name:'Court Shoe',cat:'Sepatu Formal Wanita',price:1050000,image:'https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=900'},

  // SNEAKERS — 10 FOTO BERBEDA
  {id:41,name:'Adidas Court Edit',cat:'Sneakers Pria & Wanita',price:450000,image:'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:42,name:'Nike Everyday White',cat:'Sneakers Pria & Wanita',price:600000,image:'https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:43,name:'New Balance Shelf Edit',cat:'Sneakers Pria & Wanita',price:750000,image:'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:44,name:'Retro Court Sneaker',cat:'Sneakers Pria & Wanita',price:900000,image:'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:45,name:'Minimal White Trainer',cat:'Sneakers Pria & Wanita',price:1050000,image:'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:46,name:'Leather Lifestyle Sneaker',cat:'Sneakers Pria & Wanita',price:450000,image:'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:47,name:'Canvas Classic',cat:'Sneakers Pria & Wanita',price:600000,image:'https://images.pexels.com/photos/2016145/pexels-photo-2016145.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:48,name:'Street Low',cat:'Sneakers Pria & Wanita',price:750000,image:'https://images.pexels.com/photos/1102777/pexels-photo-1102777.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:49,name:'Daily Comfort',cat:'Sneakers Pria & Wanita',price:900000,image:'https://images.pexels.com/photos/1554613/pexels-photo-1554613.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:50,name:'Urban Trainer',cat:'Sneakers Pria & Wanita',price:1050000,image:'https://images.pexels.com/photos/260044/pexels-photo-260044.jpeg?auto=compress&cs=tinysrgb&w=900'},

  // RUNNING — 5 FOTO BERBEDA
  {id:51,name:'Nike Flyknit Max',cat:'Sepatu Running Pria & Wanita',price:450000,image:'https://images.pexels.com/photos/9207813/pexels-photo-9207813.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:52,name:'Pink Pace Runner',cat:'Sepatu Running Pria & Wanita',price:600000,image:'https://images.pexels.com/photos/28505285/pexels-photo-28505285.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:53,name:'Grey Track Runner',cat:'Sepatu Running Pria & Wanita',price:750000,image:'https://images.pexels.com/photos/48262/pexels-photo-48262.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:54,name:'Blue Race Runner',cat:'Sepatu Running Pria & Wanita',price:900000,image:'https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {id:55,name:'Daily Run Trainer',cat:'Sepatu Running Pria & Wanita',price:1050000,image:'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=900'}
];

// Penting: seluruh URL gambar dibuat unik untuk setiap kartu produk.
// Foto berasal dari Pexels dan ditampilkan dalam frame katalog yang ukurannya seragam.
const imageUrls = products.map(p=>p.image);
console.assert(new Set(imageUrls).size === products.length, 'Ada URL gambar produk yang duplikat.');

const categories = [...new Set(products.map(p=>p.cat))];
const rupiah=n=>new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n);
let cart=JSON.parse(localStorage.getItem('lanaver_cart')||'[]'),active='Semua';
const grid=document.getElementById('productGrid'),tabs=document.getElementById('categoryTabs');

if(tabs){['Semua',...categories].forEach(c=>{const b=document.createElement('button');b.textContent=c;b.className=c===active?'active':'';b.onclick=()=>{active=c;document.querySelectorAll('.category-tabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderProducts()};tabs.appendChild(b)})}

function renderProducts(){
  if(!grid)return;
  const q=(document.getElementById('search')?.value||'').toLowerCase();
  grid.innerHTML=products
    .filter(p=>(active==='Semua'||p.cat===active)&&(`${p.name} ${p.cat}`).toLowerCase().includes(q))
    .map(p=>`<article class="product"><div class="product-img"><img src="${p.image}" alt="${p.name}" loading="lazy" referrerpolicy="no-referrer"><span class="quick">View</span></div><div class="product-body"><span class="product-cat">${p.cat}</span><h3>${p.name}</h3><div class="price">${rupiah(p.price)}</div><button onclick="addToCart(${p.id})">Add to bag</button></div></article>`).join('')||'<p class="empty">Produk tidak ditemukan.</p>';
}

function saveCart(){localStorage.setItem('lanaver_cart',JSON.stringify(cart));renderCart()}
function addToCart(id){const item=cart.find(x=>x.id===id);if(item)item.qty++;else cart.push({id,qty:1});saveCart();openCart()}
function changeQty(id,d){const x=cart.find(i=>i.id===id);if(x){x.qty+=d;if(x.qty<1)cart=cart.filter(i=>i.id!==id)}saveCart()}
function removeItem(id){cart=cart.filter(i=>i.id!==id);saveCart()}
function totals(){return cart.reduce((s,i)=>{const p=products.find(x=>x.id===i.id);return s+(p?p.price*i.qty:0)},0)}
function renderCart(){const el=document.getElementById('cartItems');if(!el)return;document.getElementById('cartCount').textContent=cart.reduce((s,i)=>s+i.qty,0);document.getElementById('cartTotal').textContent=rupiah(totals());el.innerHTML=cart.length?cart.map(i=>{const p=products.find(x=>x.id===i.id);return `<div class="cart-item"><img class="mini-img" src="${p.image}" alt="${p.name}" loading="lazy" referrerpolicy="no-referrer"><div><b>${p.name}</b><div class="cart-price">${rupiah(p.price)}</div><div class="qty"><button onclick="changeQty(${p.id},-1)">−</button><span>${i.qty}</span><button onclick="changeQty(${p.id},1)">+</button></div></div><button class="remove" onclick="removeItem(${p.id})">Remove</button></div>`}).join(''):'<div class="empty-cart"><strong>Your bag is empty.</strong><span>Tambahkan beberapa pilihan dari koleksi.</span></div>'}
function openCart(){document.getElementById('cartDrawer').classList.add('open');document.getElementById('overlay').classList.add('show')}
function closeCart(){document.getElementById('cartDrawer').classList.remove('open');document.getElementById('overlay').classList.remove('show')}
function showModal(id){document.getElementById(id).classList.add('show')}
function hideModal(id){document.getElementById(id).classList.remove('show')}
function checkout(){if(!cart.length)return alert('Keranjang masih kosong.');closeCart();document.getElementById('checkoutSummary').innerHTML=`<div class="receipt-box"><div class="receipt-row"><span>${cart.reduce((s,i)=>s+i.qty,0)} items</span><b>${rupiah(totals())}</b></div></div>`;showModal('checkoutModal')}
function paymentUI(){const q=document.getElementById('paymentMethod').value==='qris';document.getElementById('qrisArea').style.display=q?'block':'none'}
function finishPayment(){
  if(!document.getElementById('customerName').value.trim())return alert('Masukkan nama pelanggan.');
  const method=document.getElementById('paymentMethod').value;
  if(method==='qris'&&!document.getElementById('proof').files.length)return alert('Upload bukti pembayaran terlebih dahulu.');
  const now=new Date();
  const transaction={time:now.toLocaleString('id-ID'),customer:document.getElementById('customerName').value.trim(),method,items:cart.map(i=>({id:i.id,qty:i.qty})),total:totals()};
  const history=JSON.parse(localStorage.getItem('lanaver_transactions')||'[]');history.unshift(transaction);localStorage.setItem('lanaver_transactions',JSON.stringify(history));
  document.getElementById('receiptContent').innerHTML=`<div class="receipt-box"><div class="receipt-row"><span>Pelanggan</span><b>${transaction.customer}</b></div>${cart.map(i=>{const p=products.find(x=>x.id===i.id);return `<div class="receipt-row"><span>${p.name} × ${i.qty}</span><b>${rupiah(p.price*i.qty)}</b></div>`}).join('')}<div class="receipt-row total-row"><span>Total</span><b>${rupiah(transaction.total)}</b></div><div class="receipt-row"><span>Waktu</span><b>${transaction.time}</b></div><div class="receipt-row"><span>Metode</span><b>${method.toUpperCase()}</b></div></div>`;
  cart=[];saveCart();hideModal('checkoutModal');showModal('successModal');
}

document.getElementById('cartBtn')?.addEventListener('click',openCart);
document.getElementById('closeCart')?.addEventListener('click',closeCart);
document.getElementById('overlay')?.addEventListener('click',closeCart);
document.getElementById('checkoutBtn')?.addEventListener('click',checkout);
document.getElementById('paymentMethod')?.addEventListener('change',paymentUI);
document.getElementById('payBtn')?.addEventListener('click',finishPayment);
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>hideModal(b.dataset.close)));
document.getElementById('proof')?.addEventListener('change',e=>{const f=e.target.files[0];if(f){const r=new FileReader();r.onload=()=>document.getElementById('proofPreview').innerHTML=`<img class="proof-img" src="${r.result}" alt="Bukti pembayaran">`;r.readAsDataURL(f)}});
document.getElementById('search')?.addEventListener('input',renderProducts);
renderProducts();renderCart();paymentUI();
