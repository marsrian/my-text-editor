// text: Bold
document.getElementById("bold").addEventListener("click", function(e){
    const textareaField = document.getElementById("textarea-field");
    if(textareaField.style.fontWeight === "bold"){
        textareaField.style.fontWeight = "normal"
    }
    else{
        textareaField.style.fontWeight = "bold";
    }
})

// text: Italic
document.getElementById("italic").addEventListener("click", function(){
    const textareaField = document.getElementById("textarea-field");
    if(textareaField.style.fontStyle === 'italic'){
        textareaField.style.fontStyle = 'normal';
    }
    else{
        textareaField.style.fontStyle = 'italic'
    }
})
// text: underline
document.getElementById("underline").addEventListener("click", function(){
    const textareaField = document.getElementById("textarea-field");
    if(textareaField.style.textDecoration === "underline"){
        textareaField.style.textDecoration = "none";
    }
    else{
        textareaField.style.textDecoration = "underline";
    }
})
// text: align left
document.getElementById("align-left").addEventListener("click", function(){
    const textareaField = document.getElementById("textarea-field");
    textareaField.style.textAlign = "left"
})
// text: align right
document.getElementById("align-right").addEventListener("click", function(){
    const textareaField = document.getElementById("textarea-field");
    textareaField.style.textAlign = "right"
})
// text: align cnter
document.getElementById("align-center").addEventListener("click", function(){
    const textareaField = document.getElementById("textarea-field");
    textareaField.style.textAlign = "center"
})
// text: align justify
document.getElementById("align-justify").addEventListener("click", function(){
    const textareaField = document.getElementById("textarea-field");
    textareaField.style.textAlign = "justify"
})
// font-size:
document.getElementById("font-size").addEventListener("change", function(event){
    const valueString = event.target.value;
    const value = parseFloat(valueString);
    document.getElementById("textarea-field").style.fontSize = `${value}px`;
})

// text-color:
document.getElementById("text-color").addEventListener("change", function(event){
    const color = event.target.value;
    document.getElementById("textarea-field").style.color = `${color}`;
})
// Capitalize:
document.getElementById("capitalize").addEventListener("click", function(){
    const textAreaField = document.getElementById("textarea-field");
    textAreaField.style.textTransform = 'capitalize';
})

// Uppercase:
document.getElementById("uppercase").addEventListener("click", function(){
    const textAreaField = document.getElementById("textarea-field");
    textAreaField.style.textTransform = 'uppercase'
})

// Lowercase:
document.getElementById("lowercase").addEventListener("click", function(){
    const textAreaField = document.getElementById("textarea-field");
    textAreaField.style.textTransform = 'lowercase'
})


