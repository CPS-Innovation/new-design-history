---
override:tags: []
layout: collection
title: Review and redact a case
description: A tool for reviewing and redacting cases
pagination:
  data: collections.polaris
  reverse: true
  size: 50
permalink: "polaris/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    title: Review and redact a case (legacy)
    key: polaris
    excerpt: "{{ description }}"
    parent: home
---