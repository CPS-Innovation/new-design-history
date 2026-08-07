---
override:tags: []
layout: product
title: AI use cases
description: Documenting the design of AI-assisted features across CPS services
pagination:
  data: collections.ai-use-cases
  reverse: true
  size: 50
permalink: "ai-use-cases/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    title: AI use cases
    key: ai-use-cases
    excerpt: "{{ description }}"
    parent: Home
---