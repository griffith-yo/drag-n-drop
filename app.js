const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
  event.target.classList.add('hold')
  event.target.textContent = 'Меня взяли'
  setTimeout(() => event.target.classList.add('hide'), 0) // Лайвхак - элемент остается перетаскиваемым, но пропадает
}

function dragend(event) {
  event.target.classList.remove('hold', 'hide')
  event.target.textContent = 'Перетащи меня'
  // event.target.className = 'item'
}

function dragover(event) {
  event.preventDefault() // Лайвхак для того, чтобы элемент перемещался
}

function dragenter(event) {
  event.target.classList.add('hovered')
}

function dragleave(event) {
  event.target.classList.remove('hovered')
}

function dragdrop(event) {
  event.target.classList.remove('hovered')
  event.target.append(item)
}
