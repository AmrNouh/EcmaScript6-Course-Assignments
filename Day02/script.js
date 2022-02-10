// Option Object assignment
function generateCourseInfo(
  options = { courseName, courseDuration, courseOwner }
) {
  var defaultValues = { courseName: "", courseDuration: 0, courseOwner: "" };
  return Object.assign({}, defaultValues, options);
}

console.log(
  generateCourseInfo({ courseName: "JavaScript", courseDuration: 5 })
);

// task 2
let tabButtonsContainer = document.querySelector(".tab-container .tab-buttons");
let tabPanelsContainer = document.querySelector(".tab-container .tab-panels");
onload = function () {
  const tabButtonsData = fetch("https://jsonplaceholder.typicode.com/users");

  tabButtonsData
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      for (let index = 0; index < response.length; index++) {
        createTabButton(response[index]["name"], response[index]["id"]);
      }
    })
    .catch((reason) => console.log(reason));
};

function createTabButton(name, id) {
  let button = document.createElement("button");
  button.innerText = name;
  button.addEventListener("click", () => showUserPosts(id));
  tabButtonsContainer.append(button);
}

async function showUserPosts(id) {
  try {
    let userPost = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    console.log(userPost);
    let post = await userPost.json();
    console.log(post); // Array
    createPost(post);
  } catch (ex) {
    console.log(ex);
  }
}

function createPost(post) {
  let tapPanels = document.querySelector(
    ".tab-container .tab-panels .tab-panel"
  );
  console.log(tapPanels);
  if (tapPanels) {
    tabPanelsContainer.removeChild(tapPanels);
  }
  let postContainer = document.createElement("div");
  postContainer.className = "tab-panel";
  for (let index = 0; index < post.length; index++) {
    let postTitle = document.createElement("h5");
    postTitle.innerText = post[index]["title"];
    let postBody = document.createElement("p");
    postBody.innerText = post[index]["body"];
    postContainer.append(postTitle);
    postContainer.append(postBody);
  }
  tabPanelsContainer.append(postContainer);
}
