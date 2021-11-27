const resultEl = document.querySelector(".result");
const searchEl = document.querySelector("input");
const houseURL = "https://anapioficeandfire.com/api/houses/378";

// STORE YOUR SWORN MEMBERS IN {members}
let members = [];
// =============================

/**
 * 
 * REQUIREMENTS:
 * 
 * 1. I should be able to see all {swornMembers}
 * after the page has loaded.
 * 2. When I type a query inside the input it should only
 * display members whose name includes the query
 */

 /** 
  * HTML for each member: 
  * <li>
  *     <p class="name">Bilbo Baggins</p>
  *     <p class="life">1777 – 1888</p>
  *     <p class="gender"><strong>Gender: </strong>Male</p>
  *     <p class="culture"><strong>Culture: </strong>Hobbit</p>
  * </li>
 */

const getData = (url) => {
    const result = fetch(url)
        .then((response) => response.json())
    return result;
};
// get data swonrmembers []/ {} name

const seeAllSwornMembers = () => {
    getData(houseURL)
    .then((results) => {
        swornMembers = results.swornMembers;
        console.log(swornMembers);
        swornMembers.forEach(member => {
            getData(member)
            .then((memberData) => {
                members.push({name: `${memberData.name}`, url: `${memberData.url}`})
                const resultLi = document.createElement('li');
                resultLi.innerHTML = `
                <li>
                    <p class="name">${memberData.name}</p>
                    <p class="life">${memberData.born} - ${memberData.died}</p>
                    <p class="gender"><strong>Gender: </strong>${memberData.gender}</p>
                    <p class="culture"><strong>Culture: </strong>${memberData.culture}</p>
                </li>`
                resultEl.appendChild(resultLi);
            })      
        })
    }) 
}
console.log(members);
seeAllSwornMembers();


getNameForSearch = (searchInput) => {
    const searchedNames = [];
    const searchedUrls = [];
    members.forEach(member => {
        const nameValue = member.name;
        if (nameValue.includes(searchInput)) {
            searchedNames.push(member.name);
            searchedUrls.push(member.url);
            
        }
    });
    console.log(searchedNames, searchedUrls);
    resultEl.innerHTML = ``;
    searchedUrls.forEach(searchedUrl => {
        getData(searchedUrl)
        .then((searchedUrlData) => {
            const resultLi = document.createElement('li');
            resultLi.innerHTML = `
            <li>
                <p class="name">${searchedUrlData.name}</p>
                <p class="life">${searchedUrlData.born} - ${searchedUrlData.died}</p>
                <p class="gender"><strong>Gender: </strong>${searchedUrlData.gender}</p>
                <p class="culture"><strong>Culture: </strong>${searchedUrlData.culture}</p>
            </li>`
            resultEl.appendChild(resultLi);
        })
    })
};

searchEl.addEventListener('keyup', (event) => {
    event.preventDefault();
    getNameForSearch(searchEl.value);
    console.log(getNameForSearch(searchEl.value));
})