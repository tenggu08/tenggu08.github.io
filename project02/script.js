(
    function(){

        const btnMenuElem = document.querySelector('.btnMenu');
        const mainMenuElem = document.querySelector('.main-menu');
        const itemElem = document.querySelector('#container');
        const gnbElem = document.querySelector('.gnb');

        gnbElem.addEventListener("click",function(e){
            let target = e.target;
            let index = parseInt( target.getAttribute("value") );

            if( index >=0 || index <= 2 ){

                btnMenuElem.style.display = "block";

                mainMenuElem.classList.toggle("on");

                itemElem.classList.toggle("on");

                for ( let dataList of itemElem.children){
                    dataList.classList.remove("on");
                }

                itemElem.children[index].classList.add("on");
            }
        });

        btnMenuElem.addEventListener("click",function(){

            btnMenuElem.style.display = "none";

            mainMenuElem.classList.toggle("on");

            itemElem.classList.toggle("on");
        });
    }
)();