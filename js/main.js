// ubmit event listener

document.getElementById('myForm').addEventListener('click', () => saveBookmark(e,'aviral', 'srivastava'));
 
//save bookmark function

function saveBookmark(e, name1, name2) {
    console.log(e,  name1, name2)
    // console.log('submitted')

    //get form values
    var siteName = document.getElementById('siteName').value
    var siteUrl = document.getElementById('siteUrl').value

    //Local Storage
    //we will save it as an array of objects

    var bookmark = {
        name: siteName,
        url: siteUrl
    }

    if(localStorage.getItem('bookmarks') === null) {
        var bookmarks = [];s
        bookmarks.push(bookmark)

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    } else {
        //get bookmarks from local storage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    }

    fetchBookmarks();
    // e.preventDefault();
}   

function deleteBookmark (name) {
    console.log(name)
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    for(var i=0; i<bookmarks.length; i++) {
        if(bookmarks[i].name === name) {
            bookmarks.splice(i,1)
        }
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))

    fetchBookmarks()
}

//function to display the bookmarks on screen

function fetchBookmarks() {

    //get items from local storage
     var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
     var bookmarkResults = document.getElementById('bookmarksResults');

     bookmarkResults.innerHTML = ""
    if(bookmarks) {
        for(let i=0; i<bookmarks.length; i++) {
            var name = bookmarks[i].name;
            var url = bookmarks[i].url;
    
        bookmarkResults.innerHTML += `
                    <div>
                    <h3>        
                        <a class="button" target="_blank" href=${url}>Visit ${name}</a>
                        <a class="button" href="#" onclick="deleteBookmark()')">Delete</a>
                    </h3>
                    </div>
                `
        }
    }


}

window.onload = function() {
    fetchBookmarks();
}


    // console.log(siteUrl)
    // // console.log(siteName, siteUrl)
    // let obj = {siteUrl, siteName}
    // localStorage.setItem('bookmarks', JSON.stringify(obj))
    // console.log(JSON.parse(localStorage.getItem('bookmarks')))
    // localStorage.removeItem('bookmarks')

    // sessionStorage.setItem('bookmarks', siteUrl)
    //


// function deleteBookmark () {
//     console.log('delete')
// }
