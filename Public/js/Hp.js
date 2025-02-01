// Data p1 dan p2
var id1 = document.getElementById("p1");
var id2 = document.getElementById("p2");

// Media Query
const media = window.matchMedia('(max-width: 590px)');
const memori = id1.parentElement;
const disk = id2.parentElement;
let removedElement = null;

function handleScreenChange(e) {
    if (e.matches) {
        if (!removedElement) {
            removedElement = [id1, id2];
            id1.remove();
            id2.remove();
        } else {
            alert("gagal menghapus element!");
        }
    } else {
        if (removedElement && !document.getElementById('p1') && !document.getElementById('p2')) {
            memori.appendChild(removedElement[0]); 
            disk.appendChild(removedElement[1]);  
            removedElement = null;
        }
    }
}
// loads halaman
handleScreenChange(media);

// akhiri
media.addEventListener("change", handleScreenChange);
