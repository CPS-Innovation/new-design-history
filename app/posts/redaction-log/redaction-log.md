---
override:tags: []
layout: collection
title: Log a redaction
description: A tool to log redactions made to CPS cases
pagination:
  data: collections.redaction-log
  reverse: true
  size: 50
permalink: "redaction-log/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:

  eleventyNavigation:
    title: Log a redaction
    key: redaction-log
    excerpt: "{{ description }}"
    parent: home
---