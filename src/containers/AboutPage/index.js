import style from './style.module.css';
import winter from './winter.jpg'

function AboutPage() {
    return (
      <>
        <div class={style.aboutContainer}>
          <img src={winter} alt="winter" class={style.winterImg}/>
          <div class={style.winterText}>
            <p>
              Winter has always been a difficult time of the year for me. It’s cold, it’s dreary, and when is the last time that I’ve seen the sun instead of gray skies? To me the only saving grace of winter is the holidays that occur during the season. The holiday spirit of giving, sharing, and caring brings joy to my heart.
            </p>
            <p>
              In this collection of charming and enchanting winter folklore and fairy tale picture books, both adults and children will find the holiday spirit. These books cover a wide range of topics including the winter solstice, the secular aspect of Christmas, the holiday spirit, and just winter itself.
            </p>
            <p>
              This is a charming and inspirational retelling of an old Mexican legend about the fact that “a gift from the heart is the best gift of all.” It is Christmas Eve in Mexico, and Juanita is upset because she cannot buy Christmas gifts for her family and she does not have anything to place before the altar of Baby Jesus. Her father does not have a job and there is no extra money to be had. When it is time for the family to go to church, Juanita tells her mother that she cannot go because she has no gifts -- both for her family and for the Baby Jesus. Her mother tells her that “there are no greater gifts than the ones you bring in your heart.” Juanita goes with her family to church but refuses to go inside. A stone angel statue speaks to Juanita and tells Juanita to “Pick the leaves (green weeds) and take them into church.” When she does, the leaves are transformed into beautiful red poinsettias, and Juanita remembers what the angel told her: “Don’t worry about how the weeds look to you. To the Baby Jesus they will not look like weeds. He will know they are a gift from your heart!”
            </p>
            <p>
              According to Scandinavian legend, Jack Frost is the son of the god of the winds who brings frost. He was variously named Jokul and Frosti, the first name meaning "icicle" and the latter "frost." Eventually the two names were combined in English to become the folk character "Jack Frost." In this story, a young boy who hates winter notices strange patterns on his window and is befriended by none other than Jack Frost himself. He follows Jack Frost into the woods and asks him, “Will you stay and play with me?” Jack Frost replies that he can but tells the boy to “never mention anything warm in front of me … that would break the spell and force me to leave.” The boy and Jack Frost have a snowball fight, go sledding together, and build two snow people and a snow dog. One day the boy notices a snowdrop and tells Jack Frost that it is almost Spring. Jack Frost vanishes, but the boy hears a whisper, “see you next winter!”             </p>
            </div>
        </div>
      </>
    );
  }
  
  export default AboutPage;