document.getElementById('borrowForm').addEventListener('submit', function(e){
  e.preventDefault();
  const nama = this.nama.value;
  const email = this.email.value;
  const buku = this.buku.value;

  if(!nama || !email || !buku){
    alert("Isi semua kolom terlebih dahulu!");
    return;
  }

  alert(`Terima kasih ${nama}, form peminjaman untuk buku "${buku}" berhasil dikirim.`);
  this.reset();
});
