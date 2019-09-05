const text = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Pellentesque sed laoreet dui. Nam quis scelerisque massa.",
    "Duis est erat, faucibus id tortor vitae, ornare facilisis mauris.",
    "Nulla sodales sollicitudin libero, non congue nisl efficitur eu.",
    "Curabitur fermentum lacus sed eleifend iaculis.",
    "Cras quis ullamcorper tellus, et faucibus dui.",
    "Ut gravida diam a sollicitudin mattis.",
    "Sed sit amet lacinia magna, sed tincidunt felis.",
    "Donec sit amet sapien id mauris varius commodo et ut diam.",
    "Quisque in nisi odio. Sed iaculis ullamcorper diam, sed pretium ex vulputate sit amet.",
    "Ut auctor nunc in luctus pretium.",
    "Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    "Maecenas et nisi commodo, lobortis tortor nec, vestibulum augue."
].join("\n");

const lipsumURL = "https://lipsum.com";


function lipsum(id, n) {
    let parent = document.getElementById(id)
    parent.innerHTML = '<p>Please ignore the following <a href="">Lorum Ipsum</a> text. It is only provided for testing layout.';
    for (let i = 0; i < n; i++) {
        parent.innerHTML += `<h3>Lorum Ipsum</h3>`;
        parent.innerHTML += `<p>${text}</p>`;
    }
    return parent;
}
