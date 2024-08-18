document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('colorPicker');
    const hexValue = document.getElementById('hexValue');
    const rgbValue = document.getElementById('rgbValue');
    const colorPreview = document.getElementById('colorPreview');
    const copyButton = document.getElementById('copyButton');
    const feedback = document.getElementById('feedback');

    function updateColor() {
        const color = colorPicker.value;
        const rgb = hexToRgb(color);

        colorPreview.style.backgroundColor = color;
        hexValue.value = color;
        rgbValue.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    }

    function hexToRgb(hex) {
        let r = 0, g = 0, b = 0;

        // 3 digits
        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        }
        // 6 digits
        else if (hex.length === 7) {
            r = parseInt(hex[1] + hex[2], 16);
            g = parseInt(hex[3] + hex[4], 16);
            b = parseInt(hex[5] + hex[6], 16);
        }

        return { r, g, b };
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            feedback.textContent = 'Color code copied!';
            setTimeout(() => feedback.textContent = '', 2000);
        });
    }

    colorPicker.addEventListener('input', updateColor);

    copyButton.addEventListener('click', () => {
        const code = hexValue.value;
        copyToClipboard(code);
    });

    updateColor(); // Initialize with default color
});
