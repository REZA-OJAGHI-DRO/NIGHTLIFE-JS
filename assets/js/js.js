let _main=document.getElementById('main')
    let line1=document.getElementById('line')
    _main.addEventListener('scroll', (e) => {
            let st = e.target.scrollTop
            let Tst = (e.target.scrollHeight) - (e.target.clientHeight)
           console.log(Tst)
            st = (st*100)/Tst
            line1.style.width=st+'%'
        })
// ********
        let hed=document.getElementById('hed')
        _main.addEventListener('scroll',(e)=>{
           let temp= e.target.scrollTop
           if(
            temp>800
           ){
            hed.classList.add('fix')
           }else{
            hed.classList.remove('fix')
           }

        })
    
    // ***********

    let _list1 = document.getElementById('l1')

    _list1.addEventListener('click', (e) => {
        e.stopPropagation()
        let list = _list1.nextElementSibling.children
        let list2 = _list1.nextElementSibling
        let temp1 = ul.computedStyleMap().get('right')
        if (temp1.value == -100) {
            list[0].style.right = 0
            list2.style.visibility = 'visible'
        }
    })
    let div = document.getElementsByClassName('l2')[0]
    let ul = document.getElementsByClassName('ul')[0]

    function l2() {

        ul.style.right = -100 + '%'
        div.style.visibility = 'hidden'
    }
    window.addEventListener('click', (e) => {
        l2()
    })
    ul.addEventListener('click', (e) => {
        e.stopImmediatePropagation()
    })

    // **********

    let i = 1
    let list2 = document.getElementById('list2')
    let ul2 = document.getElementsByClassName('ul2')[0]
    list2.addEventListener('click', (e) => {
        e.stopPropagation()
        let list = list2.nextElementSibling
        if (i % 2) {
            list.style.height = 'auto'
        } else {
            list.style.height = 0 + 'vh'
        }
        i++
    })
    window.addEventListener('click', (e) => {
        list2.nextElementSibling.style.height = 0
    })
    ul2.addEventListener('click', (e) => {
        e.stopImmediatePropagation()
    })


    // *********
    let accordion = document.querySelectorAll('.accordion>li')
    let _ul3 = document.querySelectorAll('.accordion>li>ul')
    let _icon = document.querySelectorAll('.accordion>li>i')
    _ul3.forEach((val) => {
        let h = val.clientHeight
        val.setAttribute('data-height', h)
        val.style.height = 0
    })

    accordion.forEach((val, index) => {
        val.addEventListener('click', () => {
            let child = val.children
            for (let i = 0; i < accordion.length; i++) {
                if (index != i) {
                    console.log(i)
                    _ul3[i].style.height = 0
                    _icon[0].style.transform = 'rotate(90deg)'
                    _icon[i].style.transform = 'rotate(0)'
                    accordion[i].setAttribute('data-status', 'off')
                }
            }
            if (val.getAttribute('data-status') == 'on') {
                child[2].style.height = 0
                val.setAttribute('data-status', 'off')
                child[1].style.transform = 'rotate(0)'
                _icon[0].style.transform = 'rotate(90deg)'
            } else {
                let child = val.children
                let h1 = child[2].getAttribute('data-height')
                child[2].style.height = h1 + 'px'
                val.setAttribute('data-status', 'on')
                child[1].style.transform = 'rotate(90deg)'
            }
        })
    })

    // *********
    // slider
    let k = 1
    let temp1 = document.getElementsByClassName('slider')
    let _list = document.querySelectorAll('.list>button')

    function _next() {
        if (k >= 3) {
            k = 1
            for (let k = 0; k < temp1.length; k++) {
                temp1[0].style.left = 0
                temp1[k].style.left = -100 + '%'
            }
        } else if (k >= 0 && k <= 2) {
            temp1[k].style.left = 0
            k++
        }

    }

    function _prev() {
        if (k <= 1) {
            k = 3
            temp1[2].style.left = 0
            temp1[1].style.left = 0

        } else if (k >= 2 && k <= 3) {
            k--
            temp1[k].style.left = -100 + '%'
        }
    }


    // ******
    // figure
    
    let fig1=document.getElementById('fig1')
    let fig2=document.getElementById('fig2')
    let fig3=document.getElementById('fig3')
    let fig4=document.getElementById('fig4')
    fig1.addEventListener('mousemove',(e)=>{
        let x=(e.offsetX/20)-15
        let y=(e.offsetY/10)-14
        // console.log(y)
        fig1.style.transform='perspective(800px) rotateY('+x+'deg) rotateX('+y+'deg)'
    })
    fig1.addEventListener('mouseleave',(e)=>{
        fig1.style.transform='perspective(800px) rotateY(0deg) rotateX(0deg)'
    })
    fig2.addEventListener('mousemove',(e)=>{
        let x=(e.offsetX/20)-15
        let y=(e.offsetY/10)-14
        // console.log(y)
        fig2.style.transform='perspective(800px) rotateY('+x+'deg) rotateX('+y+'deg)'
    })
    fig2.addEventListener('mouseleave',(e)=>{
        fig2.style.transform='perspective(800px) rotateY(0deg) rotateX(0deg)'
    })
    fig3.addEventListener('mousemove',(e)=>{
        let x=(e.offsetX/20)-15
        let y=(e.offsetY/10)-14
        // console.log(y)
        fig3.style.transform='perspective(800px) rotateY('+x+'deg) rotateX('+y+'deg)'
    })
    fig3.addEventListener('mouseleave',(e)=>{
        fig3.style.transform='perspective(800px) rotateY(0deg) rotateX(0deg)'
    })
    fig4.addEventListener('mousemove',(e)=>{
        let x=(e.offsetX/20)-15
        let y=(e.offsetY/10)-14
        // console.log(y)
        fig4.style.transform='perspective(800px) rotateY('+x+'deg) rotateX('+y+'deg)'
    })
    fig4.addEventListener('mouseleave',(e)=>{
        fig4.style.transform='perspective(800px) rotateY(0deg) rotateX(0deg)'
    })