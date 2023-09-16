// incremental static generation
import { API_URL } from '@/constants';

export default function IncrementalStaticRegeneration({ data }) {
  return (
    <>
      {/* {data.map((e) => (
       <h2 key={e.id}>{e.title}</h2>
      ))} */}
    </>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
// export async function getStaticProps() {
//   const res = await fetch(API_URL);
//   const data = await res.json();

//   return {
//     props: {
//       data, // will be passed to the page component as props
//     },

//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every second
//     revalidate: 30, // In seconds
//     fallback:false
//   };
// }