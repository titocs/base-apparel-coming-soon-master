var coba = document.querySelector(".accept"); // Ngambi element tombol
coba.addEventListener('click', function(){
    let masukan_benar = false;
    var Masukan = document.getElementById('masukan').value; // Ngambil nilai masukan dari keyboard
    for(const iterasi of Masukan){
        if(iterasi === '@' || Masukan.length === 0)
            masukan_benar = true;
    }
    var Image_error = document.querySelector('.error');
    var Error_message = document.querySelector('.warn');
    var Border_error = document.querySelector('.tombol');
    if(masukan_benar){
        Image_error.style.display = 'none';
        Error_message.style.display = 'none';
        Border_error.style.border = '1px solid hsl(0, 14%, 67%)';
        alert('Email Address Benar');
    }
    else{
        Image_error.style.display = 'block';
        Error_message.style.display = 'block';
        Border_error.style.border = '2px solid hsl(0, 93%, 68%)';
    }
});