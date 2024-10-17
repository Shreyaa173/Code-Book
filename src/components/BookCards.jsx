import React from 'react';
import next from "../assets/next.png";
import react from "../assets/react.svg";
import php from "../assets/php.png";
import swift from "../assets/swift.png";
import go from "../assets/go.png";
import Ruby from "../assets/ruby.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import HTML from "../assets/HTML.png";
import kotlin from "../assets/kotlin.png";
import java from "../assets/java.png";
import Chash from "../assets/Chash.png";
import CSS from "../assets/CSS.png";
import CPP from "../assets/CPP.png";
import JS from "../assets/JS.png";
import c from "../assets/C.png";
import BCards from './BCards';

function BookCards() {
  return (
    <>
      <div className="course-page" id="course-page">
        <div className="courses">

          {/* Course Redirection to YouTube Playlists or Course Material or Creators's Channel */}

          {/* Added Java playlist by Kunal Kushwaha */}
          <BCards imgurl={java} coursename={"Java"}  ytlink={"https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#java"} />

          <BCards imgurl={c} coursename={"C"}  ytlink={"https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#c"} />
          <BCards imgurl={CPP} coursename={"CPP"}  ytlink={"https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#cpp"} />
          <BCards imgurl={Chash} coursename={"C#"}  ytlink={"https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#c-1"} />
          <BCards imgurl={Ruby} coursename={"Ruby"}  ytlink={"https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#ruby"} />
          <BCards imgurl={python} coursename={"Python"}  ytlink={"https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#python"} />
          <BCards imgurl={CSS} coursename={"CSS"}  ytlink={"https://developer.mozilla.org/en-US/docs/Web/CSS"} />
          <BCards imgurl={go} coursename={"Go"}  ytlink={"https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#go"} />
          <BCards imgurl={HTML} coursename={"HTML"}  ytlink={"https://developer.mozilla.org/en-US/docs/Web/HTML"} />
          <BCards imgurl={JS} coursename={"Javascript"}  ytlink={"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"} />
          <BCards imgurl={kotlin} coursename={"Kotlin"}  ytlink={"https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#kotlin"} />
          <BCards imgurl={node} coursename={"Node.js"}  ytlink={"https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#nodejs"} />
          <BCards imgurl={swift} coursename={"Swift"}  ytlink={"https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#swift"} />

          {/* Updated link */}
          <BCards imgurl={php} coursename={"PHP"}  ytlink={"https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#php"} />

          {/* Updated link of React course */}
          <BCards imgurl={react} coursename={"React.js"} ytlink={"https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#react"} />

          <BCards imgurl={next} coursename={"Next.js"} ytlink={"https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#nextjs"} />
        </div>
      </div>
    </>
  );
}

export default BookCards;

