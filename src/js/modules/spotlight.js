// Requirements

// Second wrapper for the hero card, to apply second animation at the same time

// CSS variables     
// --distance: 0px;
// --distanceNeg: 0px;
// --center: 0px;
// --side: 0px;

// CSS animations
// @keyframes toCenterForward {
//     0% {
//         transform: translateX(var(--side));
//     }

//     100% {
//         transform: translateX(var(--distance));
//     }
// }

// @keyframes toSideForward {
//     0% {
//         transform: translateX(var(--center));
//     }

//     100% {
//         transform: translateX(var(--distanceNeg));
//     }
// }

// @keyframes toCenterBack {
//     0% {
//         transform: translateX(var(--distanceNeg));
//     }

//     100% {
//         transform: translateX(var(--center));
//     }
// }

// @keyframes toSideBack {
//     0% {
//         transform: translateX(var(--distance));
//     }

//     100% {
//         transform: translateX(var(--side));
//     }
// }

// @keyframes getSmaller {
//     100% {
//         opacity: 0.6;
//         transform: scale(0.7);
//     }
// }

// @keyframes getBigger {
//     0% {
//         opacity: 0.6;
//         transform: scale(0.7);
//     }

//     100% {
//         opacity: 1;
//         transform: scale(1);
//     }
// }

// @keyframes getSmallerMobile {
//     100% {
//         opacity: 0.6;
//         transform: scale(0.6);
//     }
// }

// @keyframes getBiggerMobile {
//     0% {
//         opacity: 0.6;
//         transform: scale(0.6);
//     }

//     100% {
//         opacity: 1;
//         transform: scale(1);
//     }
// }

const spotlightHero = function (heroCards, heroInners, triggerBtns, heroDescriptions) {

    const heroCards = document.querySelectorAll('.tutors__card'),
        heroInners = document.querySelectorAll('.tutors__inner'),
        triggerBtns = document.querySelectorAll('.button-bio'),
        heroDescriptions = document.querySelectorAll('.tutors__bio');

    let clicked = false;

    triggerBtns.forEach((btn, i) => {
        const init = () => {

            let cardRect = [],
                middleElement;

            const getCurrentPosition = () => {
                heroCards.forEach((card, j) => {
                    cardRect[j] = card.getBoundingClientRect();
                });
            };

            const isMobile = () => {
                return window.innerWidth <= 576;
            };

            const changeCssVar = (distance, distanceNeg, center, side) => {
                document.documentElement.style.setProperty('--distance', distance);
                document.documentElement.style.setProperty('--distanceNeg', distanceNeg);
                document.documentElement.style.setProperty('--center', center);
                document.documentElement.style.setProperty('--side', side);

                console.log("--distance:", distance);
                console.log("--distanceNeg:", distanceNeg);
                console.log("--center:", center);
                console.log("--side:", side);
            }

            const calculateDistance = () => {
                middleElement = Math.floor(cardRect.length / 2);

                const positionClickedX = cardRect[i].x,
                    positionCenter = cardRect[middleElement].x,
                    distance = positionCenter - positionClickedX;

                changeCssVar(`${distance}px`, `${-distance}px`, positionCenter, positionClickedX);
            };

            //Slide the card title from 'bio' to 'close'
            const animateButtons = (frontTranslate, backTranslate, frontOpacity, backOpacity) => {
                const btnFront = btn.querySelector('.front'),
                    btnBack = btn.querySelector('.back');

                btnFront.style.cssText = `
                    transform: translateY(${frontTranslate}px);
                    opacity: ${frontOpacity};			
                    `;
                btnBack.style.cssText = `
                    transform: translateY(${backTranslate}px);
                    opacity: ${backOpacity};			
                    `;
            };

            const toggleBio = () => {
                heroDescriptions.forEach((bio, j) => {
                    bio.classList.add('animate__animated');
                    bio.style.display = 'none';
                    bio.classList.remove('animate__fadeInUp', 'animate__fadeOutDown');

                    if (!clicked && j === i) {
                        bio.style.display = 'block';
                        bio.classList.add('animate__fadeInUp');
                    } else if (clicked && j === i) {
                        bio.style.display = 'block';
                        bio.classList.add('animate__fadeOutDown');
                        setTimeout(() => {
                            bio.style.display = 'none';
                        }, 800);
                    }
                });
            };

            // clone and append the copy of bio for mobile
            const toggleBioMobile = () => {
                if (isMobile()) {
                    heroDescriptions.forEach((bio, j) => {
                        if (j === i) {
                            heroCards.forEach((card, n) => {
                                if (n === i) {
                                    let appendCopy = card.querySelector('.tutors__bio-copy');

                                    if (!appendCopy) {
                                        const bioClone = bio.cloneNode(true);
                                        card.appendChild(bioClone);
                                        bioClone.classList.add('tutors__bio-copy');
                                        appendCopy = card.querySelector('.tutors__bio-copy');
                                    }

                                    setTimeout(() => {
                                        appendCopy.classList.toggle('tutors__bio-copy__active');
                                    }, 10);
                                }
                            });
                        }
                    });
                }
            };

            const toggleButtonsVisibility = () => {
                triggerBtns.forEach(button => {
                    if (!clicked) {
                        if (button !== btn) {
                            button.classList.remove('animate__animated', 'animate__fadeIn');
                            button.classList.add('button-hide');
                            button.disabled = true;
                        }
                        button.style.display = 'initial';
                        button.classList.remove('button-hide');
                        button.disabled = false;
                    }

                });
            };

            const animateForward = () => {
                heroCards.forEach((card, j) => {
                    if (j !== i) {
                        heroInners[j].style.animation = 'getSmaller 1s ease-in-out forwards';
                    } else {
                        card.setAttribute('data-clicked', 'true');
                        calculateDistance();
                        if (!card.getAttribute('data-center')) {
                            // we need to apply 2 diffirent animations to the same object
                            // that's why we use a wrapper teacherItem
                            // we apply 1 animation to the card and the second to the wrapper.
                            card.style.animation = 'toCenterForward 1s ease-in-out forwards';
                            card.style.zIndex = 11;
                            heroCards[middleElement].style.animation = 'toSideForward 1s ease-in-out forwards';
                        }
                    }
                });
            };

            const animateBackwards = () => {
                heroInners.forEach(inner => {
                    if (!inner.closest('[data-clicked]')) {
                        inner.style.animation = 'getBigger 1s ease-in-out forwards';
                    }
                });

                heroCards.forEach((card, j) => {
                    if (card.getAttribute('data-clicked') && !card.getAttribute('data-center')) {
                        card.style.position = 'initial';
                        card.style.zIndex = 1;
                        card.style.animation = 'toSideBack 1s ease-in-out forwards';
                        heroCards[1].style.animation = 'toCenterBack 1s ease-in-out forwards';
                    }
                    card.removeAttribute('data-clicked');
                });
            };

            // initiating sequence


            if (isMobile()) {
                toggleBioMobile();
                if (!clicked) {
                    clicked = true;
                } else {
                    clicked = false;
                }
            } else {
                getCurrentPosition();
                toggleBio();
                toggleButtonsVisibility();
                if (!clicked) {
                    animateForward();
                    clicked = true;
                } else {
                    animateBackwards();
                    clicked = false;
                }
            }

            if (btn.getAttribute('data-btn-clicked') === 'true') {
                animateButtons(0, 0, 1, 0);
                btn.setAttribute('data-btn-clicked', 'false');
            } else {
                animateButtons(-30, -24, 0, 1);
                btn.setAttribute('data-btn-clicked', 'true');
            }

        };
        btn.addEventListener('click', init);
    });
};

export default spotlightHero;