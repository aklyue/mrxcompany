import { useState, useCallback } from "react";

const useInitializeSwiper = () => {
    const [swiper, setSwiper] = useState(null)

    const slideNext = useCallback(() => {
        swiper.slideNext();
    }, [swiper]);

    const slidePrev = useCallback(() => {
        swiper.slidePrev();
    }, [swiper]);

    return {
        initialize: setSwiper,
        slidePrev,
        slideNext,
    }
}

export default useInitializeSwiper;