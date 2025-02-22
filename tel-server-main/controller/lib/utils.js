function createSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s-]+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

module.exports = { createSlug };
