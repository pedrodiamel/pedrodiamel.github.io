---
layout: post
title: Fedora jekyll configurate
comments: true
category: Misc
tags: jekyll
---


## jekyll is?

[Jekyll](http://jekyllrb.com) is a static site generator, an open-source tool for creating simple yet powerful websites of all shapes and sizes. From [the project's readme](https://github.com/mojombo/jekyll/blob/master/README.markdown):

  > Jekyll is a simple, blog aware, static site generator. It takes a template directory [...] and spits out a complete, static website suitable for serving with Apache or your favorite web server. This is also the engine behind GitHub Pages, which you can use to host your project’s page or blog right here from GitHub.

It's an immensely useful tool and one we encourage you to use here with Lanyon.

Find out more by [visiting the project on GitHub](https://github.com/mojombo/jekyll).

<!-- more -->

## fedora configurate and run

    # install rubygems
    # https://developer.fedoraproject.org/tech/languages/ruby/gems-installation.html
    >> sudo dnf install ruby-devel
    # https://jekyllrb.com/
    >> gem install bundler jekyll
    >> jekyll new my-awesome-site
    >> cd my-awesome-site
    >> bundle exec jekyll serve
    # => Now browse to http://localhost:4000

## run template 

    # clone template
    >> git clone jekyll [template-github]
    # create Gemfile (see exmple in my site project http://pedrodiamel.github.io/Gemfile )
    >> bundle install
    >> bundle exec jekyll serve

## links

* [https://github.com/inukshuk/jekyll-scholar](https://github.com/inukshuk/jekyll-scholar)
* [http://jekyllthemes.org](http://jekyllthemes.org)
* [https://www.youtube.com/watch?v=lsvRyE5tPQQ](https://www.youtube.com/watch?v=lsvRyE5tPQQ)
* [https://github.com/joshgerdes/jekyll-uno](https://github.com/joshgerdes/jekyll-uno)
* [http://codinfox.github.io/](http://codinfox.github.io/)
* [https://jekyllrb.com/tutorials/home/](https://jekyllrb.com/tutorials/home/)

