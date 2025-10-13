---
override:tags: []
layout: collection
title: Prepare for a hearing
description: Prepare documents for a hearing
pagination:
  data: collections.prepareHearing
  reverse: true
  size: 50
permalink: "prepareHearing/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    title: Prepare for a hearing
    key: prepareHearing
    excerpt: "{{ description }}"
    parent: home
---