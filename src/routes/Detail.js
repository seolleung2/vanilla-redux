import React from "react";

import { useParams } from "react-router-dom";

import { connect } from "react-redux";

const Detail = (props) => {
  // useParams hooks 를 사용했을 때 id 를 가져오는 법
  //   const id = useParams();
  //   console.log(id); // {id: "1610867080250"}

  console.log(props);
  return (
    <>
      <h1>{props.toDo?.text}</h1>
      <h5>Created at : {props.toDo?.id}</h5>
      {/* 왜 물음표를 붙여야 에러를 피하는지는 아직 잘 모르겠다. */}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps); // ? ownProps 가 찍히는데 이제 거기에서 match.params.id 가 필요하다.

  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
};

export default connect(mapStateToProps, null)(Detail);
