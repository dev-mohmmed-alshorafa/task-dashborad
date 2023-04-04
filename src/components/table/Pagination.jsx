import {
  generateTestData,
  usePagination,
  Pagination,
} from 'pagination-react-js'
import { useEffect } from 'react'

const App = ({ pages, setPage }) => {
  const { currentPage, entriesPerPage, entries } = usePagination(1, 3)
  console.log(pages * 10)
  const dataList = generateTestData(pages * 2.5, (i) => ({
    id: `Id${i}`,
    name: `Name${i}`,
  }))
  useEffect(() => {
    setPage(currentPage.get)
  }, [currentPage])
  return (
    <div className="container">
      <Pagination
        entriesPerPage={entriesPerPage.get}
        totalEntries={dataList.length}
        currentPage={{ get: currentPage.get, set: currentPage.set }}
        offset={1}
        classNames={{
          wrapper: 'pagination m-auto',
          item: 'pagination-item',
          itemActive: 'pagination-item-active',
          navPrev: 'pagination-item nav-item navPrev-item',
          navNext: 'pagination-item nav-item',
          navStart: 'pagination-item nav-item navStart',
          navEnd: 'pagination-item nav-item navEnd',
          navPrevCustom: 'pagination-item',
          navNextCustom: 'pagination-item',
        }}
        showFirstNumberAlways={true}
        showLastNumberAlways={true}
        navStart="&#171;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
        navEnd="&#187;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
        navPrev="&#x2039;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
        navNext="&#x203a;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
        navPrevCustom={{
          steps: 5,
          content:
            '\u00B7\u00B7\u00B7' /* Here you can pass anything (Text, HTML Tag, React Component, ...) */,
        }}
        navNextCustom={{
          steps: 5,
          content:
            '\u00B7\u00B7\u00B7' /* Here you can pass anything (Text, HTML Tag, React Component, ...) */,
        }}
      />
    </div>
  )
}

export default App
