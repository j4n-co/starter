---
published: true
title: Template Elements
permalink: /home/#template-elements
tags: home
menu_position: 2
---

# Template Elements

Proin at eros non eros adipiscing mollis. Donec semper turpis sed diam. Sed consequat ligula nec tortor. Integer eget sem. Ut vitae enim eu est vehicula gravida. Morbi ipsum ipsum, porta nec, tempor id, auctor vitae, purus. Pellentesque neque. Nulla luctus erat vitae libero. Integer nec enim. Phasellus aliquam enim et tortor. Quisque aliquet, quam elementum condimentum feugiat, tellus odio consectetuer wisi, vel nonummy sem neque in elit.

## Text Styles
# Heading 1
## Heading 2
### Heading 3
#### Heading 4

This is a basic paragraph. **Some text is bold**. *Some text is italic*. Here is some text [with a link](#). Actually, ~~Scratch that~~, that text has a strike-through. onec semper turpis sed diam. The following text is in latin: Sed consequat ligula nec tortor. Integer eget sem. Ut vitae enim eu est vehicula gravida. Morbi ipsum ipsum, porta nec, tempor id, auctor vitae, purus. Pellentesque neque. Nulla luctus erat vitae libero. Integer nec enim. Phasellus aliquam enim et tortor.

### A bullet list
- This is an bulleted list
- Nothing fancy here
- You can also have numbered lists

### A numbered list
1. Like this
2. If your list has just two items, you might not need a list.

### Blockquotes
> Blockquotes are nice for breaking up large chunks of text.
> Nulla luctus erat vitae libero. Integer nec enim. Phasellus aliquam enim et
> tortor

You can also break up content with a **horizonal rule** onec semper turpis sed diam. The following text is in latin: Sed consequat ligula nec tortor. Integer eget sem. Ut vitae enim eu est vehicula gravida. Morbi ipsum ipsum, porta nec, tempor id, auctor vitae, purus. Pellentesque neque. Nulla luctus erat vitae libero. Integer nec enim. Phasellus aliquam enim et tortor.

---

**And another pagraph begins...** onec semper turpis sed diam. The following text is in latin: Sed consequat ligula nec tortor. Integer eget sem. Ut vitae enim eu est vehicula gravida. Morbi ipsum ipsum, porta nec, tempor id, auctor vitae, purus. Pellentesque neque. Nulla luctus erat vitae libero. Integer nec enim. Phasellus aliquam enim et tortor.

## Image styles

{% include figure url="The_Hermione_being_escorted_by_the_USS_Mitscher_(DDG-57)_(1).jpg" description="A large image with a caption" %}

{% include image url="The_Hermione_being_escorted_by_the_USS_Mitscher_(DDG-57)_(1).jpg" description="image inserted with image include" width="100" left=true%}
**A paragraph with image floated to the left**. tag ng mollis. Donec semper turpis sed diam. Sed consequat ligula nec tortor. Integer eget sem. Ut vitae enim eu est vehicula gravida. Morbi ipsum ipsum, porta nec, tempor id, auctor vitae, purus. Pellentesque neque.

{% include image url="The_Hermione_being_escorted_by_the_USS_Mitscher_(DDG-57)_(1).jpg" width="200" right=true%}
**A paragraph with image floated to the right**. tag ng mollis. Donec semper turpis sed diam. Sed consequat ligula nec tortor. Integer eget sem. Ut vitae enim eu est vehicula gravida. Morbi ipsum ipsum, porta nec, tempor id, auctor vitae, purus. Pellentesque neque.

{% include image url="The_Hermione_being_escorted_by_the_USS_Mitscher_(DDG-57)_(1).jpg" width="80" height="80" left=true rounded=true%}
**A paragraph with a rounded image, floated to the left**. *This really should only be used if the image is a square, otherwise you'll get an oval*. tag ng mollis. Donec semper turpis sed diam. Sed consequat ligula nec tortor. Integer eget sem. Ut vitae enim eu est vehicula gravida. Morbi ipsum ipsum, porta nec, tempor id, auctor vitae, purus. Pellentesque neque.

## Components

So far we have cards. This is what they look like:

{% include card link='#' title="Card title" description="This is the card description" background-image="The_Hermione_being_escorted_by_the_USS_Mitscher_(DDG-57)_(1).jpg" %}
{% include card link='#' title="Another card title" description="Cards can have a dark or light title" background-image="The_Hermione_being_escorted_by_the_USS_Mitscher_(DDG-57)_(1).jpg" dark=true%}
{% include card link='#' title="Third card title" description="This is the card description" background-image="The_Hermione_being_escorted_by_the_USS_Mitscher_(DDG-57)_(1).jpg"%}