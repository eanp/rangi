export const generatePagination = (
  currentPage: number,
  totalPages: number
): (number | string)[] => {
  const SIBLINGS_COUNT = 2;
  const numbersArray: number[] = [];
  const paginationArray: (number | string)[] = [];
  for (let page = 1; page <= totalPages; page++) {
    if (
      page === 1 ||
      page === totalPages ||
      // Show SIBLINGS_COUNT range of current page
      (page >= currentPage - SIBLINGS_COUNT &&
        page <= currentPage + SIBLINGS_COUNT)
    ) {
      numbersArray.push(page);
    }
  }

  let previousNumber: number | null = null;

  for (const currentNumber of numbersArray) {
    if (previousNumber !== null) {
      if (currentNumber - previousNumber === 2) {
        paginationArray.push(previousNumber + 1);
      } else if (currentNumber - previousNumber > 1) {
        paginationArray.push("...");
      }
    }
    paginationArray.push(currentNumber);
    previousNumber = currentNumber;
  }

  return paginationArray;
};