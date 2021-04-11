---
title: Home
sections:
  - type: hero_section
    title: Welcome to the Photo 365 Podcast
    subtitle: By Andrew Haworth
    content: >+
      Learn how you can be a photographer every day. Educator and media producer
      Andrew Haworth presents practical advice and tips on how to complete a
      photo-a-day or any long-term photography project.

    actions:
      - type: action
        label: Subscribe to Podcast
        url: /thank-you
        style: primary
    image: /images/Photo 365 Cover.jpg
    image_alt: Hero section placeholder image
    media_position: left
    media_width: fifty
    align: left
    padding_top: large
    padding_bottom: large
    has_border: true
    background_color: primary
    background_image: images/hero-background.jpg
    background_image_opacity: 20
    background_image_size: cover
    background_image_repeat: no-repeat
  - type: blog_feed_section
    title: Latest Episodes
    blog_feed_cols: three
    enable_cards: true
    show_recent: true
    recent_count: 6
    show_date: true
    show_categories: false
    show_author: false
    show_excerpt: false
    show_image: true
    align: center
    padding_top: medium
    padding_bottom: medium
    has_border: true
    background_color: none
    background_image: images/pattern.svg
    background_image_opacity: 98
    background_image_size: auto
    background_image_repeat: repeat
  - type: grid_section
    title: Subscribe
    grid_items:
      - type: grid_item
        title: Apple Podcasts
        title_align: center
        content_align: center
        actions:
          - type: action
            label: Subscribe
            url: /thank-you
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
        actions_align: center
        image: images/icon-1.svg
        image_alt: Apple Podcasts icon
        image_position: top
        image_align: center
        image_has_padding: true
      - type: grid_item
        title: Spotify
        title_align: center
        content_align: center
        actions:
          - type: action
            label: Subscribe
            url: 'https://open.spotify.com/show/7L9qWq9PikPflD97PBavBG'
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
        actions_align: center
        image: images/icon-2.svg
        image_alt: Spotify icon
        image_position: top
        image_align: center
        image_has_padding: true
      - type: grid_item
        title: Google Podcasts
        title_align: center
        content_align: center
        actions:
          - type: action
            label: Subscribe
            url: >-
              https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81NWZkOTgxNC9wb2RjYXN0L3Jzcw==
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
        actions_align: center
        image_alt: Google Podcasts icon
        image_position: top
        image_align: center
        image_has_padding: true
        image_width: twenty-five
        image: /images/google-podcasts-86x86.svg
      - title: Stitcher
        title_align: center
        content_align: left
        actions:
          - label: Subscribe
            url: ' https://www.stitcher.com/s?fid=624610'
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
            new_window: false
            no_follow: false
            type: action
        actions_align: center
        actions_width: auto
        image_alt: Stitcher icon
        image_position: top
        image_width: twenty-five
        image_align: center
        image_has_padding: true
        type: grid_item
        image: /images/stitcher-86x86.svg
      - title: Overcast
        title_align: center
        content_align: left
        actions:
          - label: Subscribe
            url: lorem-ipsum
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
            new_window: false
            no_follow: false
            type: action
        actions_align: center
        actions_width: auto
        image_alt: lorem-ipsum
        image_position: top
        image_width: twenty-five
        image_align: center
        image_has_padding: true
        type: grid_item
        image: /images/icon-3.svg
      - title: RSS
        title_align: center
        content_align: center
        actions:
          - label: Subscribe
            url: 'https://anchor.fm/s/55fd9814/podcast/rss'
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
            new_window: true
            no_follow: false
            type: action
        actions_align: center
        actions_width: auto
        image_alt: RSS Feed
        image_position: top
        image_width: twenty-five
        image_align: center
        image_has_padding: true
        type: grid_item
        image: /images/Generic_Feed-icon.svg
    grid_cols: three
    grid_gap_vert: medium
    grid_gap_horiz: medium
    enable_cards: true
    align: center
    padding_top: large
    padding_bottom: large
    has_border: true
    background_color: secondary
    background_image: images/subscribe-background.jpg
    background_image_opacity: 10
    background_image_size: cover
    background_image_repeat: no-repeat
    actions: []
  - type: form_section
    content: >
      ## Contact Me


      Feel free to ask any questions or provide feedback on the show.


      If you're working your way through a photo-a-day or other long-term photo
      project, I'd love to hear from you.


      \-Andrew
    content_align: left
    form_position: right
    form_width: fifty
    form_layout: inline
    enable_card: true
    form_id: contact-form
    form_action: /thank-you
    form_fields:
      - type: form_field
        input_type: text
        name: name
        label: Name
        default_value: Your name
        is_required: true
      - type: form_field
        input_type: email
        name: email
        label: Email
        default_value: Your email address
        is_required: true
      - type: form_field
        input_type: textarea
        name: message
        label: Comment
        default_value: Your question
      - type: form_field
        input_type: checkbox
        name: consent
        label: >-
          I understand that this form is storing my submitted information so I
          can be contacted.
        is_required: true
    submit_label: Submit
    align_vert: top
    padding_top: medium
    padding_bottom: medium
    background_color: none
    background_image: images/pattern.svg
    background_image_opacity: 98
    background_image_size: auto
    background_image_repeat: repeat
seo:
  type: stackbit_page_meta
  title: The Photo 365 Podcast
  description: >-
    Andrew Haworth presents practical advice and tips on how to complete a
    photo-a-day or any long-term photography project.
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: The Photo 365 Podcast
      keyName: property
    - name: 'og:description'
      value: >-
        Andrew Haworth presents practical advice and tips on how to complete a
        photo-a-day or any long-term photography project.
      keyName: property
    - name: 'og:image'
      value: /images/Photo%20365%20Cover.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: The Photo 365 Podcast
    - name: 'twitter:description'
      value: >-
        Andrew Haworth presents practical advice and tips on how to complete a
        photo-a-day or any long-term photography project.
    - name: 'twitter:image'
      value: /images/Photo%20365%20Cover.jpg
      relativeUrl: true
template: advanced
---
