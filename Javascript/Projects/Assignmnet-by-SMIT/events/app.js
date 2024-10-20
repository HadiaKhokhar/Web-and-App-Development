/*TODO: Show an alert box on click on a link.  */
document.querySelector('#link').addEventListener('click',function(){
    alert("You clicked on the link")
})


/*TODO: Display some Mobile images in browser. On click on an image Show the message in alert to user.  */
document.querySelector('.img-group').addEventListener('click',function(event){
    if(event.target.nodeName === 'IMG'){
        alert("Thanks for purchsaing a phone from us")
    }
})


/*TODO: Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.  */
function valueSetter(){
    numberOfRow = table.children
    for (var i = 0; i < numberOfRow.length; i++){
        var row = numberOfRow[i].children;
        var numCol = row[0];
        var nameCol = row[1];
        var classCol = row[2];
        numCol.innerHTML = `${i}`;
        nameCol.innerHTML = `${nameList[i]}`;
        classCol.innerHTML = `${classList[i]}`;
    }
}
function deleteRow(){
    table.addEventListener('click',function(event){
        if(event.target.nodeName = 'BUTTON'){
            var row = event.target.parentNode.parentNode;
            var name = row.children[1].textContent
            var nameIndex = nameList.indexOf(name);
            nameList.splice(nameIndex,1)
            var studentClass = row.children[2].textContent
            var classIndex = classList.indexOf(studentClass);
            classList.splice(classIndex,1)
            row.remove()
            valueSetter()
        }
    })
}
var table = document.querySelector('#table')
var nameList = ['Hadia','Ashna','Omama','Amna','Ayesha']
var classList = ['9th','8th','7th','1st','5th']

for (var i=0 ; i< nameList.length; i++){
    var row = document.createElement('tr')
    var col = `<td></td>
               <td></td>
               <td></td>
               <td><button>Delete</button></td>`
    row.innerHTML = col 
    table.appendChild(row)
}
valueSetter()
deleteRow()


/*TODO: Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.   */
const image = document.querySelector('#img')
image.addEventListener('mouseover',function(){
    image.setAttribute('src','https://images.hdqwalls.com/wallpapers/bthumb/kingdom-come-deliverance-2017-game-2b.jpg')
})
image.addEventListener('mouseout',function(){
    image.setAttribute('src','https://images.hdqwalls.com/wallpapers/bthumb/horse-5k-tv.jpg')
})


/*TODO: Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser. */
const counterBtn = document.querySelector('#counterbtn');
const decreaseBtn = document.querySelector('#dec-btn');
const increaseBtn = document.querySelector('#inc-btn');
const resetBtn = document.querySelector('#reset-btn');
var countervalue = +counterBtn.textContent
increaseBtn.addEventListener('click',function(){
    counterBtn.textContent =  `${++countervalue}`
})
decreaseBtn.addEventListener('click',function(){
    if(countervalue>0){
        counterBtn.textContent =  `${--countervalue}`
    }
})
resetBtn.addEventListener('click',function(){
        counterBtn.textContent =  0
})

