(() => {
    var sourceUwpBtn = document.getElementsByClassName("uwp-btn");
    var sourceUwpBtnBorder = document.getElementsByClassName("uwp-border");
    var sourceUwpBtnRevealHighlight = document.getElementsByClassName("uwp-reveal-highlight");

    for (const i in sourceUwpBtn) {
        let uwpBtn = sourceUwpBtn[i];
        let uwpBtnBorder = sourceUwpBtnBorder[i];
        let uwpBtnRevealHighlight = sourceUwpBtnRevealHighlight[i];

        uwpBtn.style.width = uwpBtnBorder.clientWidth + "px"
        uwpBtn.style.height = uwpBtnBorder.clientHeight + "px"

        function clickRotate3d(e) {
            uwpBtn.classList.remove("click");

            var mousePos = { x: e.offsetX, y: e.offsetY };
            var rotateSize = { width: uwpBtn.clientWidth, height: uwpBtn.clientHeight };

            var innerMousePos = {
                x: mousePos.x - rotateSize.width / 2,
                y: mousePos.y - rotateSize.height / 2
            };

            var rotateDeg = {
                x: (-innerMousePos.y / rotateSize.height) * 2 * (rotateSize.height / 15),
                y: (innerMousePos.x / rotateSize.width) * 2 * (rotateSize.width / 15)
            };

            uwpBtn.style.transform =
                "perspective(1000px) rotateX(" +
                rotateDeg.x +
                "deg) rotateY(" +
                rotateDeg.y +
                "deg) scale3d(0.95, 0.95, 0.95)";
        }

        function clearRotate3d(e) {
            uwpBtn.classList.add("click");
            uwpBtn.style.transform = "";
        }

        function setOutlineShow(show) {
            if (show) {
                uwpBtn.classList.remove('hide-outline');
            } else {
                uwpBtn.classList.add('hide-outline');
            }
        }

        function addHoverBorder(e) {
            uwpBtnBorder.classList.add("hover");
        }

        function clearHoverBorder(e) {
            uwpBtnBorder.classList.remove("hover");
        }

        function placeReveal(e) {
            uwpBtnRevealHighlight.style.left = e.offsetX + "px";
            uwpBtnRevealHighlight.style.top = e.offsetY - uwpBtnBorder.clientHeight + "px";
        }

        function clickingReveal(e) {
            uwpBtnRevealHighlight.classList.remove('fast');
            var scale = 4;
            uwpBtnRevealHighlight.style.transform = `translate(-128px, -128px) scale(${scale.toString()})`;
            uwpBtnRevealHighlight.style.backgroundImage = 'radial-gradient(#fff2, #fff4, #fff0, transparent)';
        }

        function clearReveal(e) {
            uwpBtnRevealHighlight.classList.add('fast');
            uwpBtnRevealHighlight.style.transform = '';
            uwpBtnRevealHighlight.style.backgroundImage = '';
        }

        uwpBtn.onmousedown = (e) => {
            clickRotate3d(e);
            clearHoverBorder(e);
            setOutlineShow(false);
            clickingReveal(e);
        };

        uwpBtn.onmouseup = (e) => {
            clearRotate3d(e);
            addHoverBorder(e);
            clearReveal(e);
            setOutlineShow(true);
            uwpBtn.blur();
        };

        uwpBtn.onmouseenter = (e) => {
            addHoverBorder(e);
        };

        uwpBtn.onmouseleave = (e) => {
            clearRotate3d(e);
            clearHoverBorder(e);
            setOutlineShow(true);
        };

        uwpBtn.onmousemove = (e) => {
            placeReveal(e);
        };
    }

})()