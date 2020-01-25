export function selectMenuByKey (key) {
  const selectedEls = document.querySelectorAll('.menu-tree .el-tree-node__content.is-selected')
  selectedEls.forEach(el => el.classList.remove('is-selected'))

  const node = document.querySelector(`.menu-tree #tree-node__${key}`)
  if (node) {
    node.parentElement.classList.add('is-selected')
  }
}
