// Simple JS for demo reviews
function submitReview() {
    const select = document.getElementById('review-option');
    const textarea = document.getElementById('review-text');

    if(!select.value){
        alert("Please select an option before submitting!");
        return;
    }
    if(!textarea.value){
        alert("Please write a review!");
        return;
    }

    alert(`Review submitted!\nOption: ${select.value}\nReview: ${textarea.value}`);
    textarea.value = "";
    select.value = "";
}
