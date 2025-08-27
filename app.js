document.addEventListener('DOMContentLoaded', () => {
    const sortableLists = document.querySelectorAll('.sortable-list');
    
    let draggedItem = null;

    sortableLists.forEach(sortableList => {
        sortableList.addEventListener('dragstart', (e) => {
            draggedItem = e.target;
            setTimeout(() => e.target.classList.add('dragging'), 0);
        });

        sortableList.addEventListener('dragend', (e) => {
            e.target.classList.remove('dragging');
            draggedItem = null;
        });

        sortableList.addEventListener('dragover', (e) => {
            e.preventDefault();
            const targetItem = e.target.closest('.list-item');
            if (targetItem && targetItem !== draggedItem) {
                const children = Array.from(sortableList.children);
                const draggedIndex = children.indexOf(draggedItem);
                const targetIndex = children.indexOf(targetItem);

                if (draggedIndex < targetIndex) {
                    sortableList.insertBefore(draggedItem, targetItem.nextSibling);
                } else {
                    sortableList.insertBefore(draggedItem, targetItem);
                }
            }
        });
    });
});