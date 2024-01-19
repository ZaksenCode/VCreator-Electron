
export function addListeners()
{
    document.getElementById("browse-button").addListener("click", openContentPage("content-project"));
    document.getElementById("block-button").addtListener("click", openContentPage("content-block"));
}

function openContentPage(id) {
    hideAllPages()
    page = document.getElementById(id);
    content_project.classList.toggle("hide");
}
    
function hideAllPages() {
    content_project = document.getElementById("content-project");
    content_block = document.getElementById("content-block");
    content_script = document.getElementById("content-script");
    content_project.classList.add("hide");
    content_block.classList.add("hide");
    content_script.classList.add("hide");
}