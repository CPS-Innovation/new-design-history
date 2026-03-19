---
override:tags: []
layout: product
title: Apply to join a CPS advocate panel
description: A service for barristers and solicitors who want to do work as advocates for the CPS
pagination:
  data: collections.advocate-panel-application
  reverse: true
  size: 50
permalink: "advocate-panel-application/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    title: Apply to join a CPS advocate panel
    key: advocate-panel-application
    excerpt: "{{ description }}"
    parent: Home
---
