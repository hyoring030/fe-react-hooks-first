import React, {useState} from "react";

const Diary = () => {
  // 이벤트 핸들러부터 state까지 모두 스스로 작성해보시길 바랍니다!
  // 과연 어떤 state를 생성해주어야하고, 또 어떤 이벤트 핸들러가 필요할까요?
  // 실습으로 다뤘던 두 문제를 참고하면 충분히 해결할 수 있으실거라 생각합니다!
  const [subject, setSubject] =useState("");
  const [content, setContent] =useState("");
  

  const textHandler = (e) => {
    const inputText= e.target.value;
    setContent(inputText);
  }

  const subHandler =(e)=>{
    const inputSub= e.target.value;
    setSubject(inputSub);
  }

  const onReset = (e) => {
    setSubject("");
    setContent("");
  };

  return (
    <div className="diary">
      <input value={subject} onChange= {subHandler} name="subject" placeholder="제목을 입력해주세요" />
      <br />
      <textarea value={content} onChange={textHandler} name="content" placeholder="내용을 입력해주세요" />
      <br />
      <button onClick={onReset} > 초기화</button>
      <br />
      <button onClick={()=> alert("제목: " + subject + "\n" +"내용: "+ content )} > 입력 완료 </button>
    </div>
  );
};

export default Diary;
