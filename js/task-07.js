const inputRangeRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

textRef.style.fontSize = inputRangeRef.value + 'px';

const textResizing = () => {
    textRef.style.fontSize = `${inputRangeRef.value}px`;
};

inputRangeRef.addEventListener('input', textResizing);