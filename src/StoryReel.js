import React from "react";
import "./StoryReel.css";
import Story from "./Story.js";

function StoryReel() {
  return (
    <div className="storyReel">
      {/* Story >> img, profilePic, title */}
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRESnQqFv8BrRRrW6YQnAfNBKhPXZPR5BSh1Q&usqp=CAU"
        profilePic="https://media-exp1.licdn.com/dms/image/C4D03AQH-gRWzBMsHVw/profile-displayphoto-shrink_100_100/0?e=1606953600&v=beta&t=XS_bceQNbb7WKoMGZyShme9XLRW0aXdgKuxs2Il636E"
        title="Hongdi LAI"
      />
      <Story
        image="https://i.pinimg.com/originals/a1/eb/e1/a1ebe154df2b6c1f5de1c57100cf8fb7.jpg"
        profilePic="https://www.profilecareers.com.au/wp-content/uploads/2018/12/staceyback-bio.jpg"
        title="Stacey LAMARIE"
      />
      <Story
        image="https://cf.shopee.sg/file/85e542270d218ae57e26214e93ee37f3"
        profilePic="data:image/jpeg;base64,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"
        title="Johnathan WICK"
      />
      <Story
        image="data:image/jpeg;base64,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"
        profilePic="https://www.aceshowbiz.com/images/photo/frank_ocean.jpg"
        title="Francois OCEAN"
      />
      <Story
        image="https://i.pinimg.com/236x/d3/ff/0f/d3ff0f2df57e3d6ccb39c6aa025a57ab--digital-paintings-oil-paintings.jpg"
        profilePic="https://image.tmdb.org/t/p/original/3OlkHjDKDj9NKkFWXfLk7gcb2C.jpg"
        title="Natalie DORMER"
      />
    </div>
  );
}

export default StoryReel;
