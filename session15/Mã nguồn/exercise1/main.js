const button = document.querySelector('button');
//add sự kiện click 
button.addEventListener('click',function () {
    //code xử lý sự kiện nằm ở đây
    const lis = document.querySelectorAll('li');
    const lastLi = document.querySelector('ul > li:nth-child('+lis.length+')');
    //`ul > li:nth-child(${lis.length})`
    //2
    //ul > li:nth-child(2)
    //const lastLiLast = lis[lis.length-1];
    //tạo phần tử li
    const newLi = document.createElement('li');
    newLi.innerText = parseInt(lastLi.innerText) + 1; //3

    const ul =document.querySelector('ul');
    ul.append(newLi);
})
