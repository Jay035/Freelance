let left = document.querySelector('.left');
let content = document.querySelector('.content');
let protos = document.querySelectorAll('.proto');

left.addEventListener('mousemove',(event) => {
    let move = (event.clientX * 0.05) + 4;
    let move2 = (event.clientX * 0.003);
    content.style.transform = `translateX(-${move2}%)`;
     
    protos.forEach(proto,() => {
        proto.style.transform = `translateX(${move}%)`;
    })
})
