const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

 

const list = document.querySelector('.gallery');

const markup = images.map((img) => `<li><img src = "${img.url}" width = "340"></li>`).join('');

list.insertAdjacentHTML("beforeend", markup);

list.style.listStyle = 'none';
list.style.display = 'flex';
list.style.justifyContent = "center";
 
const li = list.children;
for (const lis of li) {
lis.style.margin = "10px";
}

 
