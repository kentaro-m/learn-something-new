---
name: 'new-blog-post'
root: './content/blog'
output: '**/*'
ignore: []
questions:
  title: 'Please enter a post title.'
  slug: 'Please enter a post slug.'
---

# `{{ inputs.slug }}/index.md`

```markdown
---
title: {{ inputs.title }}
date: '{{ date }}'
---
```