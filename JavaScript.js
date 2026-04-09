const products = [
    { 
        name: "Sofa Velvet Emerald", 
        price: "Rp 8.500.000", 
        category: "Sofa",
        img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80" 
    },
    { 
        name: "Lemari Pakaian Minimalis", 
        price: "Rp 12.000.000", 
        category: "Lemari",
        img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80" 
    },
    { 
        name: "Meja Makan Marble Set", 
        price: "Rp 15.200.000", 
        category: "Meja Makan",
        img: "https://images.unsplash.com/photo-1577146333195-7c061277df80?auto=format&fit=crop&w=600&q=80" 
    },
    { 
        name: "Tempat Tidur King Size", 
        price: "Rp 18.000.000", 
        category: "Tempat Tidur",
        img: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=600&q=80" 
    },
    { 
        name: "Kursi Lounge Klasik", 
        price: "Rp 3.500.000", 
        category: "Kursi",
        img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80" 
    },
    { 
        name: "Wastafel Marmer Modern", 
        price: "Rp 4.800.000", 
        category: "Wastafel",
        img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80" 
    },
    { 
        name: "Lampu Hias Gantung Gold", 
        price: "Rp 2.900.000", 
        category: "Lampu Hias",
        img: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb21?auto=format&fit=crop&w=600&q=80" 
    },
    { 
        name: "Karpet Persia Premium", 
        price: "Rp 6.500.000", 
        category: "Karpet",
        img: "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?auto=format&fit=crop&w=600&q=80" 
    },
    { 
        name: "Meja Tamu Jati", 
        price: "Rp 4.200.000", 
        category: "Meja",
        img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80" 
    }
];

const container = document.getElementById('product-container');

// Fungsi untuk menampilkan produk
function displayProducts() {
    products.forEach(item => {
        container.innerHTML += `
            <div class="product-card">
                <div class="product-category">${item.category}</div>
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <button class="btn-buy">Detail Produk</button>
            </div>
        `;
    });
}

// Inisialisasi
displayProducts();

// Efek Navigasi saat Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        nav.style.background = 'white';
        nav.style.boxShadow = 'none';
    }
});
let cart = [];
let total = 0;

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
}

function updateCartUI() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalPriceElement = document.getElementById('total-price');
    
    cartItemsElement.innerHTML = '';
    total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItemsElement.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>Rp ${item.price.toLocaleString()}</span>
            </div>
        `;
    });

    cartCount.innerText = cart.length;
    totalPriceElement.innerText = total.toLocaleString();
}

function sendToWhatsApp() {
    if (cart.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }

    const phoneNumber = "6281234567890"; // GANTI DENGAN NOMOR WA ANDA
    let message = "Halo Mega Sari Furniture, saya ingin memesan:\n\n";
    
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - Rp ${item.price.toLocaleString()}\n`;
    });

    message += `\n*Total Harga: Rp ${total.toLocaleString()}*`;
    message += `\n\nMohon informasi ketersediaan stok, terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}
function kirimPesanForm() {
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;

    if (nama === "" || email === "" || pesan === "") {
        alert("Mohon lengkapi semua data formulir.");
        return;
    }

    const phoneNumber = "6281234567890"; // Ganti dengan nomor WA Anda
    const text = `Halo Mega Sari Furniture,\n\nSaya *${nama}* (${email})\nIngin bertanya: ${pesan}`;
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappURL, '_blank');
}
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#nav-list');

// Menambahkan event listener klik
menu.addEventListener('click', function() {
    // Menambah atau menghapus class 'active' saat diklik
    menuLinks.classList.toggle('active');
    
    // Opsional: Animasi tombol hamburger jadi tanda silang
    menu.classList.toggle('is-active');
});