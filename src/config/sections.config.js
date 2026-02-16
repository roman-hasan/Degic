import heroImage from "../assets/hero.png"
import management from "../assets/management.png"
import entertainment from "../assets/entertainment.png"
import references from "../assets/references.png"
import marketing from  "../assets/marketing.png"
import miniLogo from  "../assets/miniLogo.png"
import company1 from  "../assets/company1.png"
import company2 from  "../assets/company3.png"
import company4 from  "../assets/company4.png"
import company5 from  "../assets/company5.png"
import company6 from  "../assets/company6.png"
import company7 from  "../assets/company7.png"
import videoBanner from "../assets/videoBanner.png"
import work1 from "../assets/work1.png"
import work2 from "../assets/work2.png"
import bomb from "../assets/bomb.png"
import QuickMask from "../assets/quick-mask.png"
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.png"
import CartoonImage from "../assets/Cartoon.png"

export const sections = [
  {
    type: "hero",
    data: {
      heading: "Simply explained with illustrations",
      paragraph:
        "There are a lot of different components that will help you create the perfect look for your project",
      heroImage
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
        image: management,
        heading: "Management",
        paragraph: "Software platform for running your new internet business"
      },
      {
        image: entertainment,
        heading: "Entertainment",
        paragraph: "Creative components to build engaging digital experiences."
      },
      {
        image: marketing,
        heading: "Marketing",
        paragraph: "Modern solutions to plan, launch, and grow your audience effectively."
      },
      {
        image: references,
        heading: "References",
        paragraph: "Reliable resources and clear guides to support your projects."
      }
    ]
    }
  },

  {
    type: "slider",
    data: {
      CartoonImage,
      slides: [
        {
          miniLogo,
          heading: "Make more time for the work that matters most",
          paragraph:
            "Our platform helps you streamline repetitive tasks so you can dedicate more hours to the projects and ideas that truly make an impact. Focus on what drives growth while we handle the rest."
        },
        {
          miniLogo,
          heading: "Simplify your daily workflow",
          paragraph:
            "With a set of intuitive tools and ready-to-use components, your day-to-day tasks become faster, smarter, and less stressful. Automate routine processes and keep your workflow seamless and efficient."
        },
        {
          miniLogo,
          heading: "Boost your team's productivity",
          paragraph:
            "Empower your team with collaboration tools that make communication smooth and project management effortless. Stay on top of deadlines, share resources easily, and watch your collective productivity soar."
        },
        {
          miniLogo,
          heading: "Focus on what really matters",
          paragraph:
            "Spend less time on mundane tasks and more on creativity and strategic thinking. Our solutions allow you to prioritize impactful work, innovate freely, and make every effort count toward meaningful results."
        }
      ],
      companyLogos: [
        company1,
        company2,
        company4,
        company5,
        company6,
        company7
      ]
    }
  },

  {
    type: "video",
    data: {
      heading: "Use illustrations in UI design",
      videoBanner
    }
  },


  {
    type: "moreWork",
    data: {
      blocks: [
        {
          layout: "image-left",
          image: work1,
          heading: "Make more time for the work",
          bullets: [
            "Many ways to use illustrations in design",
            "Simply explained with illustrations",
            "Make more time for the work"
          ]
        },
        {
          layout: "image-right",
          image: work2,
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
        maskImage: QuickMask,
        illustrationImage: bomb
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
          image: blog1,
          heading: "Make myspace your best designed space",
          paragraph:
            "A lot of different components that will help you create the perfect look for your project",
          category: "Design"
        },
        {
          image: blog2,
          heading: "My company culture has changed today",
          paragraph:
            "3D illustrations are transforming digital experiences with depth, realism, and modern visual storytelling.",
          category: "3D Illustrations"
        },
        {
          image: blog3,
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
