const sortByDate = (array) => {
  const sortedArray = array.sort(
    (a, b) => new Date(b.data.date && b.data.date).valueOf() - new Date(a.data.date && a.data.date).valueOf()
  );
  return sortedArray;
};

export { sortByDate as s };
