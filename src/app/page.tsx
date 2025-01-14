import ImageZoom from '@/components/wrapper/ImageZoom'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='max-w-[800px] flex flex-col justify-center items-center w-screen space-y-6 py-4 text-justify'>
        <h1 className='font-semibold text-3xl'>
          This is Assignment for Flib Developer Role
        </h1>
        <ImageZoom animationDuration={0.3} zoomEnabled={true} zoomSize={1.5}>
          <img 
            src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg" 
            alt="Zoomable Image" />
        </ImageZoom>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolorum recusandae consequatur obcaecati cupiditate perspiciatis molestias illum saepe odio. Neque molestias fugiat, reiciendis earum quae ducimus possimus, illum odio distinctio aut optio voluptatem, in deleniti. Eaque quia asperiores voluptatibus aliquam exercitationem necessitatibus inventore culpa incidunt aperiam amet magnam porro veritatis, cumque soluta nisi dolorem, voluptate modi neque omnis optio itaque vero. Tenetur assumenda similique quam rem eius blanditiis doloribus autem inventore! Aspernatur nesciunt perferendis ut ipsam placeat, excepturi expedita qui non modi quasi cupiditate in explicabo. Provident modi laborum, veniam, consequuntur quam ipsam, mollitia beatae ab architecto odio quisquam cum. Explicabo magni molestias fugit commodi ex modi odit cumque eveniet est eligendi, culpa repellat tempore hic consequatur minima debitis obcaecati sapiente tempora temporibus nesciunt numquam omnis expedita non. Totam neque explicabo velit fugit voluptate sequi dolorem distinctio soluta cum obcaecati amet, voluptatibus nihil facilis molestias quos placeat, mollitia aut excepturi, inventore dolor iure! Dolores at temporibus ipsum provident excepturi quisquam amet dicta ratione blanditiis laborum tempore quas exercitationem nulla nostrum aliquam odit ad, maxime molestiae corrupti deserunt laboriosam eveniet. Eum ad commodi consequatur vero libero quod eligendi necessitatibus rerum ea, dignissimos fuga itaque ab. Nam repudiandae tempore laborum natus quos et inventore possimus sit labore saepe facilis, dolor quo architecto optio magni nihil excepturi rem debitis non, expedita, officia voluptate. Quod, minima distinctio commodi animi cupiditate delectus nihil cumque blanditiis excepturi accusamus sunt eligendi veritatis doloremque aut amet omnis neque impedit vero deserunt sint voluptatem, provident consectetur. Est dignissimos eius, deserunt, iure voluptatum dolorem doloribus fuga labore aut explicabo saepe consequuntur. Dolorum id magnam unde officiis illo reprehenderit suscipit explicabo minima voluptate in, vero accusamus eum consequuntur obcaecati velit asperiores amet architecto reiciendis? Porro repudiandae odio laboriosam, id eveniet veniam praesentium dicta aperiam fugit. Eaque molestias laboriosam sint iusto cumque.
        </div>
        <ImageZoom animationDuration={0.3} zoomEnabled={true} zoomSize={1.5}>
            <Image 
              src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-halloween-cat-1036x780.jpg"
              height={500}
              width={500}
              alt=''
            />
        </ImageZoom>
      </div>
    </>
  )
}
