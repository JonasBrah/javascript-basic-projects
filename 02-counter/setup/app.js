let count=0;
const value= document.querySelector("#value");
const btns= document. querySelectorAll(".btn");

console.log(btns);

btns.forEach(function(btn) { // forEach es para cada boton del nodo(decrease,reset,increase)
    btn.addEventListener("click", function(e){
        // console.log(e.currentTarget.classList); Ver las clases de cada boton que se presiona
        const styles= e.currentTarget.classList
        console.log(e.currentTarget.classList);
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("reset")){
            count=0;
        }
        else if(styles.contains("increase")){
            count++;
        }

        if(count>0){
            value.style.color="green";
        }
        if(count<0){
            value.style.color="red";
        }
        if(count===0){
            value.style.color="#22";
        }

        value.textContent= count;
    });
});