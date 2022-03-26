const setTimer = (el,time,activeClass) => {
    setTimeout(function(){
        el.classList.add(activeClass);
    },time);
};

const slideIn = (elem, multiElem,startTime, activeClass) => {

    let timeSettings = {
        time : startTime,
        timeInterval : 250
    };

    if (multiElem) {
        let el = document.querySelectorAll(elem);
        for(let i = 0; i < el.length; i++) {
            timeSettings.time += timeSettings.timeInterval;
            setTimer(el[i],timeSettings.time,activeClass);
        }
    } else {
        let el = document.querySelector(elem);
        setTimer(el,startTime,activeClass);
    }
};

const getOffset = (el) => {
    let rect = document.querySelector(el).getBoundingClientRect();
    return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
    };
};

const scrollSlide = (el,elx,multiElem, startTime, activeClass) => {

    let scrollSettings = {
        vp : window.innerHeight,
        addPadding : 20,
    };

    let elementView  = (Math.floor(getOffset(el).top) - scrollSettings.vp);
    let pageLoadView = (Math.floor(window.scrollY) + scrollSettings.addPadding);

    if (pageLoadView > elementView) {
        return slideIn(elx, multiElem, startTime, activeClass);
    }
    window.addEventListener('scroll', function(){
        let currentView = Math.floor(window.scrollY);
        if (currentView > elementView) {
            return slideIn(elx, multiElem, startTime, activeClass);
        }
    });

};