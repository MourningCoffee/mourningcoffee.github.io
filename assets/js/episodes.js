---
---
  var staticEpisodes = [
     {% for episode in site.data.episodes %}
     {% unless forloop.first %},{% endunless %}{
         title: "{{episode.title}}",
         description: "{{episode.description}}",
         created: "{{episode.created}}",
         audio: "{{episode.audio}}",
         duration: "{{episode.duration}}",
         image: "{{episode.image}}"
     }
     {% endfor %}
  ]