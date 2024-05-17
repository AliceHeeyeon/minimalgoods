import { useEffect } from "react";
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from 'jquery';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false
});

const Home = () => {
  useEffect(() => {
    const initializeAnimations = () => {
      const sections = $(".section.is--hero");
      const navLogo = $(".nav_logo");
      let navLogoImg = $(".logo_img");

      if (sections.length && navLogo.length) {
        sections.each(function (index) {
          const triggerElement = $(this)[0];
          const targetElement = navLogo[0]; 

          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: triggerElement,
              start: "top top",
              end: "bottom top",
              scrub: 1,
              onEnter: () => {
                navLogoImg.attr("src", "/img/logo-light.svg");
              },
              onLeave: () => {
                navLogoImg.attr("src", "/img/logo-light.svg");
              },
              onEnterBack: () => {
                navLogoImg.attr("src", "/img/logo-light.svg");
              },
              onLeaveBack: () => {
                navLogoImg.attr("src", "/img/logo-dark.svg");
              }
            }
          });

          tl.from(targetElement, {
            width: "100%",
            y: "-30vh",
            duration: 1,
            ease: "power1.inOut"
          });
        });
      }
    };

    // Animate From
    $(".header_text-move").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(this);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // trigger element - viewport
          start: "-100% top",
          end: "30% top",
          scrub: 1
        }
      });
      tl.to(targetElement, {
          y: "100%",
          duration: 1
      });
    });

    // Sticky circle
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

    // Light to Dark Colour Change
    $(".grid_wrapper:nth-child(odd)").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $("body, .section.is--nav");
      let navLogoImg = $(".logo_img");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // trigger element - viewport
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onEnter: () => {
            navLogoImg.attr("src", "/img/logo-dark.svg");
          },
          onLeave: () => {
            navLogoImg.attr("src", "/img/logo-light.svg");
          },
          onEnterBack: () => {
            navLogoImg.attr("src", "/img/logo-dark.svg");
          },
          onLeaveBack: () => {
            navLogoImg.attr("src", "/img/logo-dark.svg");
          }
        }
      });
      tl.fromTo(targetElement, {
          backgroundColor: "#e8e2da",
          color: "#2e2a27",
          duration: 1
        },
        {
          backgroundColor: "#2e2a27",
          color: "#e8e2da",
          duration: 1
        }
      );
    });

    // Dark to Light Colour Change
    $(".sticky-circle_wrap, .grid_wrapper:nth-child(even)").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $("body, .section.is--nav");
      let navLogoImg = $(".logo_img");
      let navContainer = $(".section.is--nav");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // trigger element - viewport
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onEnter: () => {
            navLogoImg.attr("src", "/img/logo-light.svg");
            navContainer.css("border-bottom", "1px solid #2e2a27");
          },
          onLeave: () => {
            navLogoImg.attr("src", "/img/logo-dark.svg");
          },
          onEnterBack: () => {
            navLogoImg.attr("src", "/img/logo-light.svg");
            navContainer.css("border-bottom", "1px solid #2e2a27");
          },
          onLeaveBack: () => {
            navLogoImg.attr("src", "/img/logo-light.svg");
            navContainer.css("border-bottom", "1px solid #2e2a27");
          }
          
        }
      });
      tl.fromTo(targetElement, {
          backgroundColor: "#2e2a27",
          color: "#e8e2da",
          duration: 1
        },
        {
          backgroundColor: "#e8e2da",
          color: "#2e2a27",
          duration: 1
        }
      );
    });

    // Grid Title Change
    // Set the initial active class and text
    const gridTextItem = $('.grid_text-item').eq(0);
    gridTextItem.addClass('is--active').find('p').text('Chair');

    // Titles for each grid section
    const titles = ['Furniture', 'Living', 'Home', 'Office'];

    // Run a function for each grid_wrapper
    $(".grid_wrapper").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(".grid_text-item").eq(0);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top bottom",
          end: "bottom bottom",
          onEnter: () => {
            $(".grid_text-item").removeClass("is--active");
            targetElement.addClass("is--active");
            targetElement.find('p').text(titles[index]);
            gsap.to(targetElement, { opacity: 1, duration: 0.1 });
          },
          onEnterBack: () => {
            $(".grid_text-item").removeClass("is--active");
            targetElement.addClass("is--active");
            targetElement.find('p').text(titles[index]);
            gsap.to(targetElement, { opacity: 1, duration: 0.1 });
          }
         
        }
      });
    });

    // Grid Item Move
    $(".grid_item:nth-child(3n+1)").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(this);

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        });
        tl.to(targetElement, {
          y: "-30%",
          duration: 1
        });
    });

    // Grid Item Move 2
    $(".grid_item:nth-child(3n+2)").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(this);

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          }
        });
        tl.to(targetElement, {
          y: "-50%",
          duration: 1
        });
    });

    // Grid Item Move 3
    $(".grid_item:nth-child(3n+3)").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(this);

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          }
        });
        tl.to(targetElement, {
          y: "-70%",
          duration: 1
        });
    });
     
   
      
  

    // Use setTimeout to delay the initialization slightly to ensure DOM is ready
    const timeoutId = setTimeout(initializeAnimations, 100);

    // Cleanup function to remove ScrollTriggers on unmount
    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // Empty dependency array to run only once on mount


  return (
    <div className="home">
      <div className="section is--hero">
        <img src="/img/hero_img.jpg" alt="hero_img"/>
      </div>
      <div className="wrapper">
        <div className="section is--nav">
            <div className="container is--nav">
                <div className="nav_top">
                    <div className="nav_logo-contain">
                        <div className="nav_logo">
                          <img className="logo_img" src="/img/logo-dark.svg" alt="logo" />
                        </div>
                    </div>
                    <div className="nav_side nav_menu">
                        <ul>
                            <li>PRODUCTS</li>
                            <li>INSPIRATION</li>
                            <li>NEWS</li>
                        </ul>
                    </div>
                    <div className="nav_side is--right">
                        <p>2024, ALL RIGHTS RESERVED</p>
                    </div>
                </div>
            </div>
        </div> 
        {/* section 1 end */}

        <div className="section is--header header">
          <div className="container is--header header-ct">
            <div className="header-text">
              <div className="header_text-wrap">
                <div className="header_text-move">
                  <h1>Discover</h1>
                </div>
              </div>
              <div className="header_text-wrap">
                <div className="header_text-move">
                  <h1 className="text-thin">the best in</h1>
                </div>
              </div>
              <div className="header_text-wrap">
                <div className="header_text-move">
                  <h1>minimal</h1>
                </div>
              </div>
              <div className="header_text-wrap">
                <div className="header_text-move">
                  <h1>design</h1>
                </div>
              </div>
            </div>

            <div className="sticky-circle_wrap">
              <div className="sticky-circle">
                <div className="sticky-circle_element">
                  <img src="/img/circle_img.jpg" alt="circle_img" />
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* section 2 end */}

        <div className="section is--categories categories-sc">
          <div className="container is--categories categories-ct">
            <div className="categories">
              <div className="categories_link">Seating</div>
              <div className="categories_link">Tables</div>
              <div className="categories_link">Shelves</div>
              <div className="categories_link">Beds</div>
              <div className="categories_link">Wardrobe</div>
              <div className="categories_link">Kitchen</div>
              <div className="categories_link">Office</div>
              <div className="categories_link">Cushions</div>
              <div className="categories_link">Mirrors</div>
              <div className="categories_link">Dogs</div>
              <div className="categories_link">Lighting</div>
              <div className="categories_link">Outdoor</div>
            </div>
          </div>
        </div>
        {/* section 3 end */}

        <div className="section is--gird grid-sc">
          <div className="container is--grid grid-ct">

            <div className="grid_text-wrap">
              <div className="grid_text-list">
                <div className="grid_text-item">
                  <p className="grid_text-title"></p>
                </div>
              </div>
              <div>
                <p></p>
              </div>
            </div>

            <div className="grid_wrapper-contain">

              <div className="grid_wrapper">
                <div className="grid_list">
                  <div className="grid_item">
                    <div className="grid_element">
                      <div className="grid_img-box">
                        <img className="grid_img grid1-1_img" src="/img/grid1/chair1.jpeg" alt="chair1" />
                      </div>
                      <div className="grid_img-box">
                        <img className="grid_img grid1-2_img" src="/img/grid1/chair2.jpeg" alt="chair2" />
                      </div>
                      <div className="grid_img-box">
                        <img className="grid_img grid1-3_img" src="/img/grid1/chair3.jpeg" alt="chair3" />
                      </div>
                      <div className="grid_img-box">
                        <img className="grid_img grid1-4_img" src="/img/grid1/shelf1.jpeg" alt="shelf1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid_wrapper">
                <div className="grid_list">
                  <div className="grid_item">
                    <div className="grid_element">
                      <div className="grid_img-box">
                        <img className="grid_img grid2-1_img" src="/img/grid2/outdoor1.jpeg" alt="outdoor1" />
                      </div>
                      <div className="grid_img-box">
                        <img className="grid_img grid2-2_img" src="/img/grid2/outdoor2.jpeg" alt="outdoor2" />
                      </div>
                      <div className="grid_img-box">
                        <img className="grid_img grid2-3_img" src="/img/grid2/outdoor3.jpeg" alt="outdoor3" />
                      </div>
                      <div className="grid_img-box">
                        <img className="grid_img grid2-4_img" src="/img/grid2/office1.jpeg" alt="office1" />
                      </div>
                      <div className="grid_img-box">
                        <img className="grid_img grid2-6_img" src="/img/grid2/kitchen1.jpeg" alt="kitchen1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid_wrapper">
                <div className="grid_list">
                  <div className="grid_item">
                    <div className="grid_element">
                      <div className="grid_img-box">
                        <img className="grid_img grid3-1_img" src="/img/grid3/vase1.jpeg" alt="vase1" />
                      </div>
                      <div className="grid_img-box">
                        <img className="grid_img grid3-2_img" src="/img/grid3/vase2.jpeg" alt="vase2" />
                      </div>
                      <div className="grid_img-box">
                        <img className="grid_img grid3-3_img" src="/img/grid3/vase3.jpeg" alt="vase3" />
                      </div>
                      <div className="grid_img-box">
                        <img className="grid_img grid3-4_img" src="/img/grid3/home1.jpeg" alt="home1" />
                      </div>
                      <div className="grid_img-box">
                        <img className="grid_img grid3-5_img" src="/img/grid3/home2.jpeg" alt="home2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid_wrapper grid4">
                <div className="grid_list">
                  <div className="grid_item">
                    <div className="grid_element">
                      <div className="grid_img-box">
                        <img className="grid_img grid4-1_img" src="/img/grid4/cabinet1.jpeg" alt="cabinet1" />
                      </div>
                      <div className="grid_img-box">
                        <img className="grid_img grid4-2_img" src="/img/grid4/cabinet2.jpeg" alt="cabinet2" />
                      </div>
                      <div className="grid_img-box">
                        <img className="grid_img grid4-3_img" src="/img/grid4/cabinet3.jpeg" alt="cabinet3" />
                      </div>
                      <div className="grid_img-box">
                        <img className="grid_img grid4-4_img" src="/img/grid4/lamp1.jpeg" alt="lamp1" />
                      </div>
                      <div className="grid_img-box">
                        <img className="grid_img grid4-5_img" src="/img/grid4/lamp3.jpeg" alt="lamp3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
