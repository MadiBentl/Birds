declare global {
  interface Photo {
    title: string
    slug: string
    image: string,
    country: string,
    climate: string,
    summary: string,
    creator: string,
    creator_email: string,
    id: string
  }

  interface PageProps {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }
}

export default global;