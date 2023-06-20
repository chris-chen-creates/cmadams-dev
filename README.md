**Here's a blog post I made going over the new site and the recipe**

![sunrise-scifi](https://github.com/chris-chen-creates/cmadams-dev/assets/34226032/ba61f487-db0a-4190-8bea-5b1160e79bc3)

# Wowza! A new site!

Today I finished working on my new personal website called cmadams.dev. I came up with this idea because I wanted a digital resume of sorts and a place to house some writings and thoughts over time. I personally really enjoy some of the old ideas the web had before all the social media stuff. **People had their own spaces on the web** where they could control what it looked like, felt like, and could show their interests. People would seek out and find community based around shared interests. I also find it to be a lot less noisy then when everyone is in the same room together...

### Neato, but why make one in the first place?

I've had a website for a long time that I would display a lot of my creative work on. That site is actually still up too at food4ghosts.com. It's very under construction though so I have it closed down while I update it. I like having a spot on the web that I can reference to people and say, "Hey, if you wanna know a bit about my _vibe_, check this out!". I find it more enjoyable to look at people's personal areas of the web rather than something like LinkedIn as well since there's only so much you can do with LinkedIn profile. Also did I mention all the _noise_...

## So how'd I build this?

With a bit of research on the technologies out there right now, I came up with this recipe:

- Astro as the web framework
- React for the JS/TS framework
- TailwindCSS for all the CSS-ness
- Inkdrop as a Content Management System (CMS)
- Neocities to host it all


### Inspiration and CMS
![inkdrop_eyecatch](https://github.com/chris-chen-creates/cmadams-dev/assets/34226032/26517689-6bc4-48ae-9d73-9fbd4147bfd1)


I also got inspired by looking at some other profile sites out there. One notable is [Takuya Matuyama](https://www.craftz.dog/) who has a fantastic, beautiful Youtube channel called [devaslife](https://www.youtube.com/devaslife). I really enjoyed the layout of his site and he had a great video going over the setup. I've been using the note taking app [Inkdrop](https://www.inkdrop.app/) that he built for a few months now. It's honestly been my favorite out of all of them out there because it doesn't try to do too much. I find that it's the food truck of note apps, small menu but it does all of it super well. So with Inkdrop Takuya showed that you can use it as a CMS and create a live-import tool to pull in notebooks (how groups of notes are organized). So I could easily write my posts, run the live-import tool and all the posts would be pulled into the website, parsed, and Astro would covert them into individual pages. It's rad!

## Framework

So for the rest of the site I ended up using Astro, React, and TailwindCSS. React and Tailwind I've used for a really long time so I chose those purely because I'm used to using them. Astro however I was still a bit new to.

### Astro

So Astro is a super easy to use, modern way to build a website that has a lot of nice features like:

- Ability to build Astro components (works kinda like React, but even easier)
- Very fast performance by doing partial hydration of the Javascript
- Easy API integration
- Integrations of other frameworks such as React, TailwindCSS, Storyblok, MDX, etc.

After using it on this project, I can confidently say that it's super easy to use and can nicely scale even if you just wanna work with HTML and CSS. The beauty is that you can get as _fancy_ as you want with it or you can just make something simple. If you're looking for a simple web framework, I'd recommend checking it out at [astro.build](astro.build).

## Hosting

So this part is pretty easy. For hosting, I use [neocities](https://neocities.org). Neocities is a new age version of the hit classic geocities (if you don't know, look it up). It's a simple place to build and share websites with a simple interface to browse the sites hosted on there. I've built a few retro-style sites on neocities and I wanted to see how well it would work with a statically generated site from Astro.

#### Result

It worked great :)

## A new home!

So that's a _very_ short, high level run through of my new profile site. It's gonna continue to be a place where I experiment and try breaking things as well as a place to house some writings and thoughts. If you wanna check out the source, [here](https://github.com/chris-chen-creates/cmadams-dev) is a link to check it out on Github. I hope you're doing well and I appreciate your visit. Take care and see you on the web :D
