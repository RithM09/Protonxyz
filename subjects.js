document.addEventListener('DOMContentLoaded', function () {
    const chapters = document.querySelectorAll('.chapter');

    chapters.forEach(chapter => {
        chapter.addEventListener('click', function (event) {
            // Stop the event from propagating to the parent elements
            event.stopPropagation();
            
            // Assuming you want to navigate to a page for each chapter
            const chapterName = this.innerText;
            // Replace "#" with the actual URL of the page for the chapter
            window.location.href = `#${chapterName}`;
        });
    });
});
