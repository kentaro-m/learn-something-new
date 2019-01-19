---
name: 'new-blog-post'
message: 'Please input slug of blog post.'
root: '.'
output: 'content/blog'
ignore: []
---

# content/blog/{{ input }}/index.md`

```markdown
---
title: XXX
date: '{{ 'new Date().toISOString()' | eval }}'
---
```
