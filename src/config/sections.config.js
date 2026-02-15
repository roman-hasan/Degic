export const sections = [
  {
    type: "hero",
    data: {
      heading: "Simply explained with illustrations",
      paragraph:
        "There are a lot of different components that will help you create the perfect look for your project",
      image: "/assets/hero.png"
    }
  },
  {
    type: "presentation",
    data: {
      heading: "The quickest way to create modern presentation",
      paragraph:
        "Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce.",
      grid: [
        {
          image: "/assets/management.png",
          heading: "Management",
          paragraph:
            "Organize your workflow, track performance, and manage your team with smart and structured tools."
        },
        {
          image: "/assets/entertainment.png",
          heading: "Entertainment",
          paragraph:
            "Deliver engaging and interactive digital experiences with creative visual components."
        },
        {
          image: "/assets/marketing.png",
          heading: "Marketing",
          paragraph:
            "Launch campaigns, analyze insights, and grow your audience using modern marketing solutions."
        },
        {
          image: "/assets/references.png",
          heading: "References",
          paragraph:
            "Access reliable resources and structured documentation to support your projects effectively."
        }
      ]
    }
  },

  {
    type: "slider",
    data: {
      slides: [
        {
          miniLogo: "/assets/miniLogo.png",
          heading: "Make more time for the work that matters most",
          paragraph:
            "Best software platform for running an internet business.",
          mainImage: "/assets/slider1-large.png"
        },
        {
          miniLogo: "/assets/miniLogo.png",
          heading: "Simplify your daily workflow",
          paragraph:
            "Tools and components to make your tasks faster and smarter.",
          mainImage: "/assets/slider2-large.png"
        },
        {
          miniLogo: "/assets/miniLogo.png",
          heading: "Boost your team's productivity",
          paragraph:
            "Efficient management and collaboration tools for everyone.",
          mainImage: "/assets/slider3-large.png"
        },
        {
          miniLogo: "/assets/miniLogo.png",
          heading: "Focus on what really matters",
          paragraph:
            "Spend less time on routine tasks and more on creative work.",
          mainImage: "/assets/slider4-large.png"
        }
      ],
      companyLogos: [
        "/assets/company1.png",
        "/assets/company2.png",
        "/assets/company3.png",
        "/assets/company4.png",
        "/assets/company5.png",
        "/assets/company6.png",
        "/assets/company7.png"
      ]
    }
  },

  {
    type: "video",
    data: {
      heading: "Use illustrations in UI design",
      bannerImage: "/assets/video-banner.png"
    }
  },


  {
    type: "moreWork",
    data: {
      blocks: [
        {
          layout: "image-left",
          image: "/assets/work1.png",
          heading: "Make more time for the work",
          bullets: [
            "Many ways to use illustrations in design",
            "Simply explained with illustrations",
            "Make more time for the work"
          ]
        },
        {
          layout: "image-right",
          image: "/assets/work2.png",
          heading: "Design smarter with modern tools",
          bullets: [
            "Create beautiful layouts effortlessly",
            "Improve workflow with smart components",
            "Focus on creativity, not complexity"
          ]
        }
      ]
    }
  },

 
  {
    type: "quickPresentation",
    data: {
      heading: "The quickest way to create awesome presentation",
      images: {
        maskImage: "/assets/quick-mask.png",
        illustrationImage: "/assets/bomb.png"
      }
    }
  },

  {
    type: "blogs",
    data: {
      heading: "Get more from our blog",
      paragraph:
        "There are a lot of different components that will help you create the perfect look for your project",
      posts: [
        {
          image: "/assets/blog1.png",
          heading: "Make myspace your best designed space",
          paragraph:
            "A lot of different components that will help you create the perfect look for your project",
          category: "Design"
        },
        {
          image: "/assets/blog2.png",
          heading: "My company culture has changed today",
          paragraph:
            "3D illustrations are transforming digital experiences with depth, realism, and modern visual storytelling.",
          category: "3D Illustrations"
        },
        {
          image: "/assets/blog3.png",
          heading:
            "Professionals in craft! All products were super great",
          paragraph:
            "Development processes become smoother when using structured components and scalable architecture.",
          category: "Development"
        }
      ]
    }
  }
];
