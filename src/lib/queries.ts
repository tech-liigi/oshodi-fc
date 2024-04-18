import { groq } from "next-sanity";

export const navQuery = groq`*[_type == "nav"][0] {
    cta[],
    pages[] {
      title,
      link,
      visible,
      page_subnav,
      page_sections,
      id,
      page_submenu {
       clubs[]->  {
          name,
          link,
          image
        },
         links
      }
    }
  }`;

export const clubsQuery = groq`*[_type == "clubs"] | order(name asc)`;
export const generalQuery = groq`*[_type == "general"][0]`;

export interface generalResponse {
  title: string;
  primary_color: {
    hex: string;
  };
  secondary_color: {
    hex: string;
  };
  logo: object;
  second_logo: object;
}
interface SubNav {
  redirect_link: string;
  section_reference: string;
  title: string;
}

interface Club {
  _type: string;
  _ref: string;
}

interface Link {
  _type: string;
  title: string;
  url: string;
}
interface SubMenu {
  clubs: Club[];
  links: Link[];
}
interface CtaItem {
  title: string;
  link: string;
}

interface Section {
  title: string;
  id: string;
  visible: boolean;
  description: string;
  tagline: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  cta: CtaItem[];
}

interface Page {
  title: string;
  link: string;
  id: string;
  visible: boolean;
  page_subnav: SubNav[];
  page_submenu: SubMenu[];
  page_sections: Section[];
}
export interface navResponse {
  cta: Array<object>;
  pages: Page[];
}

export const bannerQuery = groq`*[_type == "banner"][0]`;

interface Author {
  _type: "reference";
  _ref: string;
  name: string;
  position: string;
}

interface BlockContent {
  _type: "block";
  children: Array<{
    _type: "span";
    text: string;
    marks: [];
  }>;
}

export interface News {
  _type: "news";
  _id: string;
  title: string;
  _createdAt: string;
  _updatedAt: string;
  slug: {
    current: string;
  };
  preview: {
    _type: "image";
    asset: {
      _ref: string;
    };
  };
  category: Category;
  author: Author;
  blockContent: BlockContent[];
  short_description: string;
}

export interface Video {
  _type: "video";
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: {
    current: string;
  };
  category: Category;
  author: Author;
  video: {
    url: string;
    preview: {
      _type: "image";
      asset: {
        _ref: string;
      };
    };
  };
  preview?: {
    _type: "image";
    asset: {
      _ref: string;
    };
  };
  short_description: string;
}

interface Image {
  image: {
    _type: "image";
    asset: {
      _ref: string;
    };
  };
}
export interface BannerResponse {
  cta_item: {
    title: string;
    link: string;
  };
  images: Array<Image>;
}

export const sponsorsQuery = groq`*[_type == "sponsors"]`;
export interface Sponsor {
  _id: string;
  kind: string;
  link: string;
  image: {
    _type: "image";
    asset: {
      _ref: string;
    };
  };
}
export const newsQuery = groq`*[_type == "news"] {
     _type,
     _id,
     _createdAt,
      title,
      slug,
      preview,
      category->{
        title
      },
      short_description, 
      video {
        url,
       preview
      }
}`;
export const videoQuery = groq`*[_type == "video"] {
     _type,
         _id,
      title,
      slug,
      _createdAt,
      category->{
        title
      },
      short_description, 
      video {
        url,
       preview
      }
}`;
export const footerQuery = groq`*[_type == "footer"][0]`;
export const socialQuery = groq`*[_type == "social"]`;
export const policiesQuery = groq`*[_type == "policies"]`;
export const categoriesQuery = groq`*[_type == "categories"]`;
export interface Category {
  _id: string;
  _type: "reference";
  _ref: string;
  title: string;
  image: {
    _type: "image";
    asset: {
      _ref: string;
    };
  };
}
export const policyQuery = groq`*[_type == "policies" && slug.current == $title][0]`;
export const articleQuery = groq`*[_type == "news" && slug.current == $title][0]{
        ..., 
        author->{
        name, 
        position
        } 
}`;
export const videoSingleQuery = groq`*[_type == "video" && slug.current == $title][0]{
        ..., 
        author->{
        name, 
        position
        } 
}`;
export interface PolicyResponse {
  title: string;
  blockContent: BlockContent[];
}
