
//by using function calling on ocClick
function handleOnClick(){
    const handleStatus = document.getElementById('handle-Status');
    handleStatus.innerText = "handle by function attached on onclick attribute"
 }
// by using id calling by function

document.getElementById("event-listener").addEventListener('click',function(){
  const handleStatus = document.getElementById('handle-Status');
    handleStatus.innerText = " click me to change me"
})

// input to output by getElementById
  document.getElementById('update').addEventListener('click', function(){
    const change =  document.getElementById('input-handeler');
     const inputText =  change.value
     const output = document.getElementById('handle-Status');
     output.innerText = inputText;
     change.value = '';// for clean input after click in the button
    })


    //coments box- haldelar
