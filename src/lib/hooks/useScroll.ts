import { useState, useLayoutEffect, useRef } from "react";

export default function useScroll(throttleDelay: number = 500) {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [isScrolling, setIsScrolling] = useState(false);

	const isBusy = useRef<boolean>(false);
	const scrollOnQueue = useRef<boolean>(false);

	useLayoutEffect(() => {
		const timeoutFunction = () => {
			if (scrollOnQueue.current === false) {
				isBusy.current = false;
			} else {
				scrollOnQueue.current = false;
				setScrollPosition(window.scrollY);
				setTimeout(timeoutFunction, throttleDelay);
			}
		};
		const handleScroll = () => {
			if (isBusy.current) {
				scrollOnQueue.current = true;
			} else {
				isBusy.current = true;
				setScrollPosition(window.scrollY);
				setIsScrolling(true);
				setTimeout(timeoutFunction, throttleDelay);
			}
		};

		const handleScrollEnd = () => {
			setScrollPosition(window.scrollY);
			setIsScrolling(false);
			scrollOnQueue.current = false;
			isBusy.current = false;
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("scrollend", handleScrollEnd);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("scrollend", handleScrollEnd);
		};
	}, [throttleDelay]);

	return { scrollPosition, isScrolling };
}
