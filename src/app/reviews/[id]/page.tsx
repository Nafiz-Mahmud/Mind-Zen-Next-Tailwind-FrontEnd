import first_img from "../../../../public/the_book_of_art.jpg";
import second_img from "../../../../public/crack_the_code.jpeg";
import third_img from "../../../../public/lunar_storm.jpeg";
import { SingleReviewProps } from "@/types/globalTypes";
import Image from "next/image";
import "@/styles/single_review.scss";
export default function SingleReview({ params }: SingleReviewProps) {
  const reviews = [
    {
      id: 1,
      img: first_img,
      title: "The Book of Art",
      author: "Regina Phalange",
      reviewer: "Clark Kent",
      rating: 4.5,
      desc: "A quick brown fox jumps over the lazy dog. lorem ipsum a quick brown fox jumps over the lazy dog. lorem ipsum a quick brown fox jumps over the lazy dog.",
    },
    {
      id: 2,
      img: second_img,
      title: "Crack The Code",
      author: "Patrick C. Harless",
      reviewer: "Bruce Wayne",
      rating: 3.8,
      desc: "A quick brown fox jumps over the lazy dog. lorem ipsum a quick brown fox jumps over the lazy dog. lorem ipsum a quick brown fox jumps over the lazy dog.",
    },
    {
      id: 3,
      img: third_img,
      title: "Lunar Storm",
      author: "Terry C.",
      reviewer: "Berry Allen",
      rating: 2.1,
      desc: "A quick brown fox jumps over the lazy dog. lorem ipsum a quick brown fox jumps over the lazy dog. lorem ipsum a quick brown fox jumps over the lazy dog.",
    },
  ];
  const review = reviews[Number(params.id - 1)];
  return (
    <div className="single_review">
      <div className="single_review_header">
        <div className="img_container">
          <Image src={review.img} alt="" />
        </div>
        <div className="info">
          <h1 className="single_review_title">{review.title}</h1>
          <h1 className="single_review_author">{review.author}</h1>
          <h1 className="single_review_rating">{review.rating} / 5.0</h1>
          <h1 className="single_review_reviewer">
            Reviewed By - {review.reviewer}
          </h1>
        </div>
      </div>
      <br />
      <br />
      <div className="review_edit_delete_buttons">
        <button className="edit_review">Edit</button>
        <button className="delete_review">Delete</button>
      </div>

      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore totam
        aliquid quod dolor natus odit numquam adipisci praesentium veniam!
        Commodi ratione, ea id quisquam, alias omnis nostrum aut officia
        adipisci ipsam doloremque ab reiciendis repellendus praesentium
        accusantium veritatis voluptas nam eum, impedit tempore harum sequi quis
        animi eius. Explicabo amet vel voluptatibus delectus quis corporis
        laborum placeat, ut similique eius quod veniam consectetur repellendus
        nulla incidunt perferendis optio tempora ad? Ea ipsa aut quibusdam eos,
        eveniet, consequatur quam voluptas architecto accusantium id illum eaque
        ullam ipsum cupiditate assumenda quod nostrum odit? Explicabo cumque
        exercitationem quis sit quas veritatis distinctio nulla vel laboriosam
        animi repellendus, autem voluptatem, eius sed nemo iste, alias incidunt
        earum deleniti! Eaque id omnis, perferendis quia vel sunt asperiores
        excepturi cumque. Praesentium voluptates officiis, nihil ipsa debitis
        laudantium? Voluptatum dolores beatae error similique minima ullam ad
        nisi porro nihil labore. Ad facilis repellat exercitationem quibusdam
        repellendus accusamus pariatur maiores, dolores quisquam dolore ratione,
        ipsa dolorum deleniti ab similique at veritatis quod atque deserunt?
        Enim necessitatibus dignissimos ratione tempora quod harum, laborum
        repellat dicta ex. Dolorum libero doloribus adipisci est. Perferendis
        labore libero doloremque voluptas, iure eum unde beatae expedita
        blanditiis in eveniet nesciunt placeat eos nihil? Consequatur aut atque
        porro iste consequuntur? Quae iste ullam similique fugiat amet iure
        rerum autem animi quam molestiae ea soluta minima, asperiores neque
        quidem officiis quod dolores aliquid consectetur debitis. Illum,
        eligendi blanditiis? Doloribus repellat aperiam cum. Dolores minima,
        quae sit odio blanditiis cupiditate ab. Voluptate excepturi rem
        obcaecati optio suscipit ut nam eius similique laborum culpa. Dolorem
        laboriosam error ad corrupti aspernatur corporis id nulla dicta
        praesentium culpa nam ab odit vitae modi ducimus excepturi atque tempora
        animi, velit dolore omnis! Itaque at quas, illo dolore enim quod. Culpa
        suscipit incidunt dolor perferendis esse reiciendis magni quaerat. Modi
        unde tempora eius ab nemo hic nisi recusandae molestiae, quia excepturi
        deserunt ut, odio, quod numquam pariatur maxime perferendis molestias
        earum facere? Itaque molestias aspernatur perferendis ab omnis quisquam
        iste est numquam corrupti facilis consequuntur magnam dolor provident,
        nihil, sit, voluptatem porro exercitationem error facere nisi. Laborum
        minus assumenda facere fugit fuga dignissimos illum, labore molestias
        ipsum et. Quam quaerat repellat consectetur iure cupiditate maiores
        laborum, saepe, laboriosam fugit at obcaecati ipsam vitae? Molestiae
        tempore voluptatum optio maxime iste! Exercitationem obcaecati deleniti
        voluptate voluptatibus illum optio similique eos, blanditiis veniam,
        earum modi, nobis enim. Nam alias impedit exercitationem, veniam magnam
        obcaecati saepe.
      </p>
    </div>
  );
}
