//selectors
const buttons = document.querySelectorAll('.ripple')

//event listener
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY
    // here we get diff. positions from x & y axis of click(within the button)

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        //here we getting same position within button (to check use console.log)

        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        // to get exact position inside of button 
        //we subctract co-ordinates of button from co-ordinates of buttons

        const abc = document.createElement('span')
        //firstly we created span in html (within circle div),
        //its a harrdcore span
        // now we deleted it and created here with js
        abc.classList.add('circle')
        abc.style.top = yInside + 'px'
        abc.style.left = xInside + 'px'

        // console.log(abc);

        this.appendChild(abc)
    })
})