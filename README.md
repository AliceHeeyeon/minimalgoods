# MinimalGoods

## Scroll-Triggered Animations

> Project Description

Inspired by award-winning design websites, I dove deep into scroll-triggered animations. 
Utilizing GSAP, I created an engaging landing page for a furniture company.

> Key Takeaways

- Timeline Methods: Controlled animations to start and end at specific viewport positions.
- FromTo Method: Seamlessly transitioned CSS values (e.g., from backgroundColor: black to backgroundColor: white).
- jQuery & React: Leveraged jQuery for easier HTML document manipulation within React.

> Challenges

Navigating complex box elements, I found myself revisiting CSS position properties like sticky, fixed, and relative. 
Resources like W3Schools and MDN were invaluable in refreshing my memory.

> Code Snippet

A circular image expanded to fill the whole page while scrolling
```javascript
$(".sticky-circle_wrap").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(".sticky-circle_element");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // trigger element - viewport
          start: "top top",
          end: "bottom bottom",
          scrub: 1
        }
      });
      tl.fromTo(targetElement, {
          width: "35em",
          height: "35em",
          borderRadius: "35em",
          duration: 1
        },
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0em",
          duration: 1
        }
      );
    });

```

> Project Mockup

![mockup1](./public/img/mockup1.png)
![mockup2](./public/img/mockup2.png)
![mockup3](./public/img/mockup3.png)
