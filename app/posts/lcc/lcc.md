---
override:tags: []
layout: product
title: Large and Complex Cases (LCC)
description: A service to help users manage case admin and materials in large or complex cases
pagination:
  data: collections.lcc
  reverse: true
  size: 50
permalink: "lcc/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    title: Large and Complex Cases
    key: lcc
    excerpt: "{{ description }}"
    parent: Home
---
