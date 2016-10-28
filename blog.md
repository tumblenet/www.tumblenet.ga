---
  layout: default-breadcrumbs
  title: Blog
---
---
layout: default-breadcrumbs
title: Team
---
<div class="row container">
  <div class="col s12 m4 l3">
  {% for post in site.posts %}
  <div class="card">
    {% if page.image_url %}
    <div class="card-image">
      <img src="{{ page.image_url }}">
      <span class="card-title">{{ page.title }}</span>

    </div>
    <div class="card-content">
    {% else %}
    <div class="card-content">
      <span class="card-title">{{ page.title }}</span>
    {% endif %}
      <a href="{{ author.url }}"><div class="chip">
          {% if author.image-url %}
          <img src="{{ author.image-url }}" alt="Contact Person">
          {% else %}
          <img src="https://www.gravatar.com/avatar/{{ author.gravatar-hash }}?d=mm&s=200" alt="Contact Person">
          {% endif %}
          {{ author.title }}
        </div></a>

        {{ content }}
    </div>
  </div>
  {% endfor %}
  </div>
</div>
