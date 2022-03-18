/* header */
const sitemap = document.querySelector('.sitemap');
const sitemapBtn = document.querySelector('#nav .link-area>.sitemap-btn');
const searchWrap = document.querySelector('.search-wrap');
const searchBtn = document.querySelector('#nav .link-area>.search-btn');
const mypage = document.querySelector('.mypage-wrap');
const mypageBtn = document.querySelector('#nav .link-area>.mypage');
const imgSitemap=document.querySelector('.sitemap-btn>img');
const imgSearch=document.querySelector('.search-btn>img');
const imgMypage=document.querySelector('.mypage>img');
let nowActive = "none"

sitemapBtn.addEventListener('click', function(){
    if(nowActive === "none" || nowActive === "search" || nowActive === "mypage"){
        // style change
        sitemap.style.display="block";
        sitemapBtn.classList.add('on')
        searchBtn.classList.remove('on')
        mypageBtn.classList.remove('on')
        imgSitemap.src="./img/btn-header-layer-close.png"
        imgSearch.src="./img/ico-search-white.png"
        imgMypage.src="./img/ico-mymega-white.png"
        searchWrap.style.display="none";
        mypage.style.display="none";
        // state change
        nowActive = "sitemap"
    } else{
        // style change
        sitemap.style.display="none";
        sitemapBtn.classList.remove('on')
        imgSitemap.src="./img/ico-sitemap-white.png"
        // state change
        nowActive = "none"
    }   
});

searchBtn.addEventListener('click', function(){
    if(nowActive === "none" || nowActive === "sitemap" || nowActive === "mypage"){
        // style change
        searchWrap.style.display="block";
        searchBtn.classList.add('on')
        imgSearch.src="./img/btn-header-layer-close.png"
        imgSitemap.src="./img/ico-sitemap-white.png"
        imgMypage.src="./img/ico-mymega-white.png"
        sitemap.style.display="none";
        mypage.style.display="none";
        sitemapBtn.classList.remove('on')
        mypageBtn.classList.remove('on')
        bookingTop.classList.add('on');
        audienceTop.classList.remove('on');
        bookingTopList.classList.add('active');
        audienceTopList.classList.remove('active');
        bookingTopImg.classList.add('active');
        audienceTopImg.classList.remove('active');

        // state change
        nowActive = "search"; 


    }else{
        // style change
        searchWrap.style.display="none";
        searchBtn.classList.remove('on')
        imgSearch.src="./img/ico-search-white.png"
        // state change
        nowActive="none";
    }
});

mypageBtn.addEventListener('click', function(){
    if(nowActive === "none" || nowActive === "search" || nowActive === "sitemap"){
        // style change
        mypage.style.display="block";
        mypageBtn.classList.add('on')
        sitemapBtn.classList.remove('on')
        searchBtn.classList.remove('on')
        imgMypage.src="./img/btn-header-layer-close.png"
        imgSitemap.src="./img/ico-sitemap-white.png"
        imgSearch.src="./img/ico-search-white.png"
        searchWrap.style.display="none";
        sitemap.style.display="none";
        // state change
        nowActive = "mypage"
    } else{
        // style change
        mypage.style.display="none";
        mypageBtn.classList.remove('on')
        imgMypage.src="./img/ico-mymega-white.png"
        // state change
        nowActive = "none"
    }   
});

const bookingTop=document.querySelector('.search-wrap .booking-top');
const audienceTop=document.querySelector('.search-wrap .audience-top');
const bookingTopList=document.querySelector('.search-wrap .b-t-list');
const audienceTopList=document.querySelector('.search-wrap .a-t-list');
const bookingTopImg=document.querySelector('.search-wrap .b-t-img');
const audienceTopImg=document.querySelector('.search-wrap .a-t-img');

bookingTop.addEventListener('click', function(){
    bookingTop.classList.add('on');
    audienceTop.classList.remove('on');
    bookingTopList.classList.add('active');
    audienceTopList.classList.remove('active');
    bookingTopImg.classList.add('active');
    audienceTopImg.classList.remove('active');

});
audienceTop.addEventListener('click', function(){
    audienceTop.classList.add('on');
    bookingTop.classList.remove('on');
    audienceTopList.classList.add('active');
    bookingTopList.classList.remove('active');
    audienceTopImg.classList.add('active');
    bookingTopImg.classList.remove('active');
});

const depth1=document.querySelectorAll('.gnb>li');
const notdepth1=document.querySelector('.notdepth')
const depth2=document.querySelectorAll('.gnb>li>.depth2');
const gnbBg=document.querySelector('.gnb-bg');

for(let i=0; i<depth1.length; i++){
    depth1[i].addEventListener('mouseover', function(){
        depth2[i].classList.add('on');
        gnbBg.style.display='block';
        depth1[i].classList.add('active');
    });
    notdepth1.addEventListener('mouseover', function(){
        gnbBg.style.display='none';
    });
    depth1[i].addEventListener('mouseout', function(){
        depth2[i].classList.remove('on');
        gnbBg.style.display='none';
        depth1[i].classList.remove('active');
    });
};

/* movie-chart */
const moviePoster=document.querySelectorAll('.movie-chart>.list>li>.posterwrap');
const movieSummary=document.querySelectorAll('.movie-chart>.list>li .wrap');

for(let k=0; k<moviePoster.length; k++){
    moviePoster[k].addEventListener('mouseover', function(){
        movieSummary[k].classList.add('active')
    });
    moviePoster[k].addEventListener('mouseout', function(){
        movieSummary[k].classList.remove('active')
    });
};

const likebtn=document.querySelectorAll('.movie-chart .button .like');
let a=true;

for(let i=0; i<likebtn.length; i++){
    likebtn[i].addEventListener('click', function(){
        if(a==true){
            likebtn[i].classList.add('on');
            a=false;
        }else{
            likebtn[i].classList.remove('on');
            a=true;
        }
    })
};

const mouseMove=document.querySelector('.moving-mouse');
let b = true
setInterval(function(){
    if(b==true){
        mouseMove.style.top= 10+'px';
        b=false;
    }else{
        mouseMove.style.top= 0;
        b=true;
    }
},500);

/* info */
const blackImg=document.querySelectorAll('.info .special>li');

for(let i=0; i<blackImg.length; i++){
    blackImg[i].addEventListener('mouseover',function(){
        blackImg[i].classList.add('on');
    });
    blackImg[i].addEventListener('mouseout',function(){
        blackImg[i].classList.remove('on');
    });
};


//Slide Initialize Swiper
var swiper1 = new Swiper(".swiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    direction: "vertical",
    speed:500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});

var swiper2 = new Swiper(".swiper2", {
    spaceBetween: 30,
    centeredSlides: true,
    speed:500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
}); 

