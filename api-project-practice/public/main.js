const deleteBtn = document.querySelectorAll('.fa-trash')
const addLikesBtn = document.querySelectorAll('.fa-thumbs-up')
console.log(deleteBtn)

Array.from(deleteBtn).forEach(x => {
    x.addEventListener('click', deleteItem)
})

Array.from(addLikesBtn).forEach(x => {
    x.addEventListener('click', addLike)
})

async function deleteItem() {
    const itemText = this.parentNode.childNodes[1].innerText
    try {
        const response = await fetch('deleteItem', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemsFromJS': itemText
            })
        })

        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err) {
        console.log(err)
    }
}

async function addLike() {
    const itemText = this.parentNode.childNodes[1].innerText
    try {
        const response = await fetch('addLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemsFromJS': itemText
            })
        })

        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err) {
        console.log(err)
    }
}