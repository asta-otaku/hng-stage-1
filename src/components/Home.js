import React from "react";
import profile__img from "../assets/profile__img.png";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <div className="App">
      <div className="profile__img__container" id="profile__img__container">
        <img src={profile__img} alt="woman" id="profile__img" />
        <h3 className="profile__name">Annette Black</h3>
      </div>
      <span className="avatar-share">
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="40" height="40" rx="20" fill="#F2F4F7" />
          <path
            d="M28.3261 21.5062C28.5296 21.3318 28.6313 21.2446 28.6686 21.1409C28.7013 21.0498 28.7013 20.9502 28.6686 20.8591C28.6313 20.7554 28.5296 20.6682 28.3261 20.4938L21.2672 14.4433C20.917 14.1431 20.7419 13.9931 20.5937 13.9894C20.4648 13.9862 20.3418 14.0428 20.2603 14.1427C20.1667 14.2576 20.1667 14.4883 20.1667 14.9495V18.5289C18.3878 18.8401 16.7597 19.7415 15.5498 21.0949C14.2307 22.5704 13.501 24.48 13.5 26.4591V26.9691C14.3745 25.9157 15.4663 25.0638 16.7006 24.4716C17.7889 23.9495 18.9653 23.6403 20.1667 23.5588V27.0505C20.1667 27.5117 20.1667 27.7424 20.2603 27.8573C20.3418 27.9572 20.4648 28.0138 20.5937 28.0106C20.7419 28.0069 20.917 27.8569 21.2672 27.5567L28.3261 21.5062Z"
            stroke="#667085"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="1"
            y="1"
            width="40"
            height="40"
            rx="20"
            stroke="#D0D5DD"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <section className="profile">
        <ul>
          <li>Afolabi69093815</li>
          <li id="slack">afolabiibrahim08</li>
          <li>
            <a id="btn__zuri" href="https://training.zuri.team/">
              Zuri Team
            </a>
          </li>
          <li>
            <a
              id="books"
              href=" http://books.zuri.team"
              title="For a token, you can gain access to books that will provide you with technical insights on how to launch your career in the tech world. Give us a try and you won't regret it."
            >
              Zuri Books
            </a>
          </li>
          <li>
            <a
              id="book__python"
              href="https://books.zuri.team/python-for-beginners?ref_id=afolabiibrahim08"
            >
              Python Books
            </a>
          </li>
          <li>
            <a
              id="pitch"
              href="https://background.zuri.team"
              title="The Zuri team adhere to the strictest research requirements as they compile data from dependable and credible sources, including watch lists, government records, and media searches. It has hundreds of specialised researchers and analysts working across the globe."
            >
              Background Check for Coders
            </a>
          </li>
          <li>
            <a
              id="book__design"
              href="https://books.zuri.team/design-rules"
              title="Start your design career with the Zuri team's collection of design principles, which provides clear, understandable explanations for beginners."
            >
              Design Books
            </a>
          </li>
          <li>
            <a href="/contact">Contact Me</a>
          </li>
        </ul>
        <div className="acc">
          <span className="slack-container">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8752 9.2498C18.9106 9.2498 19.75 8.41041 19.75 7.37496C19.75 6.33952 18.9105 5.50012 17.8751 5.50012C16.8395 5.50012 16 6.33959 16 7.37512V9.2498H17.8752ZM12.625 9.2498C13.6605 9.2498 14.5 8.41033 14.5 7.3748V2.12512C14.5 1.08959 13.6605 0.250122 12.625 0.250122C11.5895 0.250122 10.75 1.08959 10.75 2.12512V7.3748C10.75 8.41033 11.5895 9.2498 12.625 9.2498Z"
                fill="#2EB67D"
              />
              <path
                d="M2.12484 10.7502C1.08939 10.7502 0.250001 11.5896 0.250001 12.625C0.250001 13.6605 1.08947 14.4999 2.12492 14.4999C3.16045 14.4999 4 13.6604 4 12.6249V10.7502H2.12484ZM7.375 10.7502C6.33947 10.7502 5.5 11.5897 5.5 12.6252V17.8749C5.5 18.9104 6.33947 19.7499 7.375 19.7499C8.41053 19.7499 9.25 18.9104 9.25 17.8749V12.6252C9.25 11.5897 8.41053 10.7502 7.375 10.7502Z"
                fill="#E01E5A"
              />
              <path
                d="M10.7501 17.8752C10.7501 18.9106 11.5895 19.75 12.625 19.75C13.6604 19.75 14.4998 18.9105 14.4998 17.8751C14.4998 16.8395 13.6603 16 12.6248 16L10.7501 16L10.7501 17.8752ZM10.7501 12.625C10.7501 13.6605 11.5896 14.5 12.6251 14.5L17.8748 14.5C18.9103 14.5 19.7498 13.6605 19.7498 12.625C19.7498 11.5895 18.9104 10.75 17.8748 10.75L12.6251 10.75C11.5896 10.75 10.7501 11.5895 10.7501 12.625Z"
                fill="#ECB22E"
              />
              <path
                d="M9.2498 2.12484C9.2498 1.08939 8.41041 0.25 7.37496 0.25C6.33952 0.25 5.50012 1.08947 5.50012 2.12492C5.50012 3.16045 6.33959 4 7.37512 4L9.2498 4L9.2498 2.12484ZM9.2498 7.375C9.2498 6.33947 8.41033 5.5 7.3748 5.5L2.12512 5.5C1.08959 5.5 0.250122 6.33947 0.250122 7.375C0.250122 8.41053 1.08959 9.25 2.12512 9.25L7.3748 9.25C8.41033 9.25 9.2498 8.41053 9.2498 7.375Z"
                fill="#36C5F0"
              />
            </svg>
          </span>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
