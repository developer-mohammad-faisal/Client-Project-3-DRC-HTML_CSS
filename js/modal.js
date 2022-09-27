const triggers = document.querySelectorAll('.recepe-modal-btn')
const modal = document.querySelector('#myRecepeModal')
const frame = document.querySelector('#myRecepeModalFrame')

function closeModal() {
    modal.style.display = 'none'
}


triggers.forEach(trigger => {
    trigger.addEventListener('click', e => {
        e.preventDefault()
            //show the modal
        modal.style.display = 'grid'
        frame.src = e.target.parentNode.href
        console.log(e.target.parentNode.href);
    })
})