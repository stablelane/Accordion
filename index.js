const accordion = document.querySelectorAll('.accord')
accordion.forEach(item => item.addEventListener('click', showContent))


// adding show class to content if it doesnt have it or else remove the show class from it
function showContent() {
    const currentContent = document.getElementById(`${this.id}-content`)
    if (!currentContent.classList.contains('show')) {
        hideAllContents()
        currentContent.classList.add('show')
    } else {
        
        currentContent.classList.remove('show')
    }
}

// remove show class from all element which .content and .show class
function hideAllContents() {
    const visibleContent = document.querySelector('.content.show')
    if(visibleContent) {
        visibleContent.classList.remove('show')
    }
}