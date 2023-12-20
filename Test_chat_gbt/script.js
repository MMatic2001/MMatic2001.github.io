document.addEventListener("DOMContentLoaded", function() {
    const block = document.getElementById("block");

    let isDragging = false;
    let offsetX, offsetY;

    block.addEventListener("mousedown", startDrag);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("mousemove", drag);

    function startDrag(e) {
        isDragging = true;
        offsetX = e.clientX - block.getBoundingClientRect().left;
        offsetY = e.clientY - block.getBoundingClientRect().top;
    }

    function stopDrag() {
        isDragging = false;
    }

    function drag(e) {
        if (isDragging) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;

            block.style.left = `${x}px`;
            block.style.top = `${y}px`;
        }
    }
});
