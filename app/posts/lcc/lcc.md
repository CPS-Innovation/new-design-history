---
override:tags: []
layout: product
title: Manage materials
description: A service to help users manage criminal cases
pagination:
  data: collections.lcc
  reverse: true
  size: 50
permalink: "manage-materials/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    title: Manage materials
    key: manage-materials
    excerpt: "{{ description }}"
---
