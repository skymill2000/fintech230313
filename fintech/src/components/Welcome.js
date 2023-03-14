const Welcome = (props) => {
  console.log(props);
  return <p>안녕하세요 {props.userName} 님 반갑습니다. </p>;
};

export default Welcome;
