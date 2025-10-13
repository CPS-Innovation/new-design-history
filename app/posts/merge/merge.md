---
override:tags: []
layout: collection
title: Merge
description: Viewing, updating and redacting case material
pagination:
  data: collections.merge
  reverse: true
  size: 50
permalink: "merge/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    title: View, update and redact a case
    key: merge
    excerpt: "{{ description }}"
    parent: home
---