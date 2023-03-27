// 로딩 화면을 숨기는 함수
const hideLoadingScreen = () => {
    var loadingScreen = document.getElementById("loading");
    loadingScreen.style.opacity = "0";
    setTimeout(function () {
        loadingScreen.style.display = "none";
    }, 500); // 0.5초 후에 화면을 숨깁니다.
};

// 로딩 화면을 보여주는 함수
const showLoadingScreen = () => {
    var loadingScreen = document.getElementById("loading");
    loadingScreen.style.display = "flex";
    setTimeout(function () {
        hideLoadingScreen();
    }, 2000); // 2초 후에 hideLoadingScreen 함수를 호출합니다.
};
