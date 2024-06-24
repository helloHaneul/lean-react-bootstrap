import React from "react";

// z-flip 같이 특수한 경우에는 환경정보와 화면 사이즈를 같이 사용해서 처리를 해줘야함
const useUserAgent = () => {
    let userAgent = navigator.userAgent;

    return userAgent;
}

export default useUserAgent;