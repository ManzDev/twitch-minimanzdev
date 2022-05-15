import anime from "animejs/lib/anime.es.js";

export const no = (element, callbackEnd) => {
  const tl = anime.timeline({
    targets: element,
    easing: "steps(2)",
    loop: 2,
    complete() { callbackEnd(); }
  });

  tl
    .add({ duration: 500, backgroundPositionX: "0px", easing: "steps(1)" })
    .add({ duration: 500, backgroundPositionX: "-18px", easing: "steps(1)" });

  return tl;
};
