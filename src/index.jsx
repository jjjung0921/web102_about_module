import React from "react";

const basic_style = {
    width: '210px',
    height: '210px',
    padding: '20px',
    index: 1
};

const element = (props) => {
  if (props.type === "image")
    return (
      <div className="image">
        <img src={props.data} alt="image" />
      </div>
    );
    else{
        if(props.top === 'true'){
            const style = {...basic_style};
            style.backgroundColor = '#386d0dc8';
            style.marginTop = "250px";
            return(
                <div className="boxItem" style={style}>
                    <h2>Title</h2>
                    {props.data};
                </div>
            )
        }
        else{
            const style = {...basic_style};
            style.float = 'left';
            style.backgroundColor = props.index%2===0?'lightgreen':'orange';
            return(
                <div className="boxItem" style={style}>
                    <h2>Item Box {props.index+1}</h2>
                    {props.data}
                </div>
            )
        }
    }
};

export default element;
