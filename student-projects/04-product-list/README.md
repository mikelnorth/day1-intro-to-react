# 04 — product-list (reference build)

The Lesson 6 architecture-exercise tree, built with Day 1 tools only (components + props).

```
App
 ├ Navbar          brand
 ├ ProductList
 │   ├ ProductCard name, price, emoji
 │   ├ ProductCard
 │   └ ProductCard
 └ Footer          company
```

```bash
npm install
npm run dev
```

Use it to answer "what should be reusable?" (ProductCard) and "who passes the props?"
(ProductList, the parent). Three hardcoded ProductCard tags are intentional.
