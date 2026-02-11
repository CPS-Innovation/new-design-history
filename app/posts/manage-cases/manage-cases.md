---
override:tags: []
layout: collection
title: Manage cases
description: A service to help users manage criminal cases
pagination:
  data: collections.manage-cases
  reverse: true
  size: 50
permalink: "manage-cases/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    title: Manage cases
    key: manage-cases
    excerpt: "{{ description }}"
    parent: home
---
