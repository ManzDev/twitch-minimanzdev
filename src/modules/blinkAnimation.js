import anime from "animejs/lib/anime.es.js";

export const blink = (element) => {
  const tl = anime.timeline({
    targets: element,
    easing: "steps(4)",
    loop: true,
    paused: true
  });

  tl
    .add({ duration: 4000, backgroundPositionX: "0px", easing: "steps(1)" })
    .add({ duration: 100, backgroundPositionX: "-18px", easing: "steps(1)" })
    .add({ duration: 100, backgroundPositionX: "-36px", easing: "steps(1)" })
    .add({ duration: 100, backgroundPositionX: "-54px", easing: "steps(1)" });

  return tl;
};
