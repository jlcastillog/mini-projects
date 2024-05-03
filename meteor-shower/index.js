const COLORS = ["#fff2", "#fff4", "#fff7", "#fffC"]

const generateSpaceLayer = (size, totalStars, selector, duration) => {
    const layer = [];

    for (let i = 0; i < totalStars; i++) {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)]
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y+100}vh 0 ${color}`);
    }

    const $container = document.querySelector(selector);
    $container.style.setProperty("--space-layer", layer.join(","));
    $container.style.setProperty("--size", size);
    $container.style.setProperty("--duration", duration);
}

generateSpaceLayer("1px", 200, '.space-1', "25s");
generateSpaceLayer("2px", 100, '.space-2', "20s");
generateSpaceLayer("4px", 25, '.space-3', "15s");