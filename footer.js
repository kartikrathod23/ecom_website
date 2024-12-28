const footer = `
<footer>
        <!-- <div class="center">
            Copyright &copy; www.MyOnlineFoodia.com. All rights reserved!
        </div> -->
        <div class="footer-cont">
            <div class="first-half">
                <img class="comp-logo" src="./images/mainlogo2.png" alt="" >
                <div class="comp-name">MyOnlineFoodia</div>
            </div>
            <div class="extra-info">
                <a href=""><span>MyOnlineFoodia</span></a>
                <a href=""><span>Instagram</span></a>
                <a href=""><span>Twitter</span></a>
                <a href=""><span>LinkedIn</span></a>
                <a href=""><span>Facebook</span></a>

            </div>
        </div>
    </footer>
`

let footerCont= document.querySelector('.footer-container')
footerCont.insertAdjacentHTML("afterbegin",footer);