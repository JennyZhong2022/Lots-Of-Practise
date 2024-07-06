
const JokesPagination = ({ setCurrentPage, currentPage,jokes ,jokesQuantity,searchTerm}) => {

  const maxPage=10
  

  const handlePaginationNext = () => {
    
    if (currentPage < maxPage) {
      setCurrentPage(prev => prev + 1)
      console.log(currentPage);}
  }
   
    
  const handlePaginationPrevious = () => {
    if (currentPage > 1) {
     
      setCurrentPage(prev => prev - 1)  
      console.log(currentPage);}
  }
   


  const handleCurrentPageChange = (e) => {
    
    const newPage = Number(e.target.value);
    setCurrentPage(newPage)
  }
      
  return (
    <div>
      <button onClick={handlePaginationPrevious}
        disabled={currentPage === 1}>Previous Page</button>
      
      <select value={currentPage} onChange={handleCurrentPageChange}>
      {Array.from({ length: maxPage }, (_, i) => (
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </select>

      <button onClick={handlePaginationNext} disabled={currentPage===maxPage || jokes.length<jokesQuantity}>Next Page</button>
    </div>
  )
}

export default JokesPagination