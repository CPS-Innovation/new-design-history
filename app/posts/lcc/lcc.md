---
override:tags: []
layout: collection
title: Manage large and complex cases
description: Manage cases that are too large or complex for CMS
pagination:
  data: collections.lcc
  reverse: true
  size: 50
permalink: "lcc/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    title: Manage large and complex cases
    key: lcc
    excerpt: "{{ description }}"
    parent: home
---