const toggleBookmark = (id) => {
  const saved = JSON.parse(localStorage.getItem('bookmarks')) || [];
  const updated = saved.includes(id)
    ? saved.filter(pid => pid !== id)
    : [...saved, id];

  localStorage.setItem('bookmarks', JSON.stringify(updated));
};

export default toggleBookmark;
