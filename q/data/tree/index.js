const treeData = [
  {
    id: 1,
    label: '一级节点',
    open: true,
    checked: false,
    parentId: null,
    visible: true,
    searched: false,
  },
  {
    id: 2,
    label: '二级节点-1',
    checked: false,
    parentId: 1,
    searched: false,
    visible: true,
  },
  {
    label: '二级节点-2',
    open: true,
    checked: false,
    id: 3,
    parentId: 1,
    visible: true,
    searched: false,
  },
  {
    id: 4,
    parentId: 3,
    label: '三级节点-1',
    visible: true,
    searched: false,
    checked: false,
  },
  {
    id: 5,
    label: '三级节点-2',
    parentId: 3,
    searched: false,
    visible: true,
    checked: false,
  },
  {
    label: '二级节点-3',
    open: true,
    checked: false,
    id: 6,
    parentId: 1,
    visible: true,
    searched: false,
  },
  {
    id: 7,
    parentId: 6,
    label: '三级节点-4',
    checked: false,
    searched: false,
    visible: true,
  },
  {
    id: 8,
    label: '三级节点-5',
    parentId: 6,
    checked: false,
    searched: false,
    visible: true,
  },
]
function runTest() {
  function mapNode(data, pId) {
    let arr = []
    arr = data
      .filter((item) => item.parentId === pId)
      .map((item) => {
        return {
          ...item,
          children: mapNode(data, item.id),
        }
      })
    return arr
  }
  const r = mapNode(treeData, null)
  return r
}
console.log(runTest())
