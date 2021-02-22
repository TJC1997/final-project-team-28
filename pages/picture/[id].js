import { useRouter } from 'next/router';

const PicturePage = () => {
    const { query: { id }} = useRouter();
    return (
      <div>
          Picture page with id: {id}
      </div>
    )
  }
  
  export default PicturePage;