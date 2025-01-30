import { e as ensure_array_like, f as stringify, c as pop, p as push } from './index-RKtuUzxt.js';
import { r as requests } from './requests-EkaszudT.js';
import './client-Dy-68ShQ.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { a as attr } from './attributes-BeaNKpgU.js';
import './exports-Drw7bup6.js';

const songs = [
  {
    category: "faith",
    title: "Dancing in the Sky",
    artist: "Dani and Lizzy",
    requested: "no"
  },
  {
    category: "faith",
    title: "Gratitude",
    artist: "Brandon Lake",
    requested: "no"
  },
  {
    category: "faith",
    title: "Graves Into Gardens",
    artist: "Brandon Lake",
    requested: "no"
  },
  {
    category: "faith",
    title: "House/Amazing Grace",
    artist: "",
    requested: "no"
  },
  {
    category: "faith",
    title: "How Great Thou Art",
    artist: "Traditional",
    requested: "no"
  },
  {
    category: "faith",
    title: "Need A Favour",
    artist: "Jelly Roll",
    requested: "no"
  },
  {
    category: "faith",
    title: "Rocking Chair",
    artist: "Cameron Whitcomb",
    requested: "no"
  },
  {
    category: "faith",
    title: "Sinking Deep",
    artist: "Hillsong",
    requested: "no"
  },
  {
    category: "faith",
    title: "There Is A Peace",
    artist: "Harvest",
    requested: "no"
  },
  {
    category: "faith",
    title: "There Was Jesus",
    artist: "Zach Williams",
    requested: "no"
  },
  {
    category: "faith",
    title: "Three Wooden Crosses",
    artist: "Randy Travis",
    requested: "no"
  },
  {
    category: "faith",
    title: "You Already Know",
    artist: "JJ Heller",
    requested: "no"
  },
  {
    category: "general",
    title: "A Thousand Years",
    artist: "Christina Perri",
    requested: "no"
  },
  {
    category: "general",
    title: "All I Want Is You",
    artist: "U2",
    requested: "no"
  },
  {
    category: "general",
    title: "All of Me",
    artist: "John Legend",
    requested: "no"
  },
  {
    category: "general",
    title: "American Beauty",
    artist: "Drew Holcomb",
    requested: "no"
  },
  {
    category: "general",
    title: "Angel From Montgomery",
    artist: "John Prine",
    requested: "no"
  },
  {
    category: "general",
    title: "Apologize",
    artist: "OneRepublic",
    requested: "no"
  },
  {
    category: "general",
    title: "As Long As You Love Me",
    artist: "Back Street Boys",
    requested: "no"
  },
  {
    category: "general",
    title: "Brown Eyed Girl",
    artist: "Van Morrison",
    requested: "no"
  },
  {
    category: "general",
    title: "Can’t Help Falling In Love",
    artist: "Elvis Presley",
    requested: "no"
  },
  {
    category: "general",
    title: "Chance",
    artist: "The National Parks",
    requested: "no"
  },
  {
    category: "general",
    title: "Come Rain or Come Shine",
    artist: "David Francey",
    requested: "no"
  },
  {
    category: "general",
    title: "Coming Home",
    artist: "Drew Holcomb",
    requested: "no"
  },
  {
    category: "general",
    title: "Country Roads",
    artist: "John Denver",
    requested: "no"
  },
  {
    category: "general",
    title: "Dancing in the Sky",
    artist: "Dani and Lizzy",
    requested: "no"
  },
  {
    category: "general",
    title: "Danny Boy",
    artist: "Traditional",
    requested: "no"
  },
  {
    category: "general",
    title: "Don’t Stop Believing",
    artist: "Journey",
    requested: "no"
  },
  {
    category: "general",
    title: "Dreamlover",
    artist: "Mariah Carey",
    requested: "no"
  },
  {
    category: "general",
    title: "Drops of Jupiter",
    artist: "Train",
    requested: "no"
  },
  {
    category: "general",
    title: "Fall Into Me",
    artist: "Forest Blakk",
    requested: "no"
  },
  {
    category: "general",
    title: "Fishin in the Dark",
    artist: "Nitty Gritty Dirt Band",
    requested: "no"
  },
  {
    category: "general",
    title: "Fly Me To the Moon",
    artist: "Frank Sinatra",
    requested: "no"
  },
  {
    category: "general",
    title: "Free Fallin",
    artist: "Tom Petty",
    requested: "no"
  },
  {
    category: "general",
    title: "Grace",
    artist: "The Dubliners",
    requested: "no"
  },
  {
    category: "general",
    title: "Hallelujah",
    artist: "Leonard Cohen",
    requested: "no"
  },
  {
    category: "general",
    title: "Have You Ever Seen The Rain",
    artist: "Creedence Clearwater Revival",
    requested: "no"
  },
  {
    category: "general",
    title: "Heart of Gold",
    artist: "Neil Young",
    requested: "no"
  },
  {
    category: "general",
    title: "Hey Jude",
    artist: "The Beatles",
    requested: "no"
  },
  {
    category: "general",
    title: "House/Amazing Grace",
    artist: "Medley",
    requested: "no"
  },
  {
    category: "general",
    title: "I’m Yours",
    artist: "Jason Mraz",
    requested: "no"
  },
  {
    category: "general",
    title: "If I Ain’t Got You",
    artist: "Alicia Keys",
    requested: "no"
  },
  {
    category: "general",
    title: "Jolene",
    artist: "Dolly Parton",
    requested: "no"
  },
  {
    category: "general",
    title: "Landslide",
    artist: "Fleetwood Mac, Dixie Chicks",
    requested: "no"
  },
  {
    category: "general",
    title: "Let Her Go",
    artist: "Passenger",
    requested: "no"
  },
  {
    category: "general",
    title: "Letting Go",
    artist: "Victoria Somer",
    requested: "no"
  },
  {
    category: "general",
    title: "Make You Feel My Love",
    artist: "Adele",
    requested: "no"
  },
  {
    category: "general",
    title: "My Little Love",
    artist: "The Weepies",
    requested: "no"
  },
  {
    category: "general",
    title: "Need A Favour",
    artist: "Jelly Roll",
    requested: "no"
  },
  {
    category: "general",
    title: "Put Your Records On",
    artist: "Corinne Bailey Rae",
    requested: "no"
  },
  {
    category: "general",
    title: "Ring of Fire",
    artist: "Johnny Cash",
    requested: "no"
  },
  {
    category: "general",
    title: "Rocking Chair",
    artist: "Cameron Whitcomb",
    requested: "no"
  },
  {
    category: "general",
    title: "Run Away To Mars",
    artist: "Talk",
    requested: "no"
  },
  {
    category: "general",
    title: "Simply The Best",
    artist: "Tina Turner",
    requested: "no"
  },
  {
    category: "general",
    title: "Something In The Orange",
    artist: "Zach Bryan",
    requested: "no"
  },
  {
    category: "general",
    title: "Stand By Me",
    artist: "Ben E King",
    requested: "no"
  },
  {
    category: "general",
    title: "Stick Season",
    artist: "Noah Kahan",
    requested: "no"
  },
  {
    category: "general",
    title: "Sunscreen",
    artist: "Ira Wolf",
    requested: "no"
  },
  {
    category: "general",
    title: "Supermarket Flowers",
    artist: "Ed Shearan",
    requested: "no"
  },
  {
    category: "general",
    title: "Sweet Home Alabama",
    artist: "Lynyrd Skynyrd",
    requested: "no"
  },
  {
    category: "general",
    title: "The Night We Met",
    artist: "Lord Huron",
    requested: "no"
  },
  {
    category: "general",
    title: "The Way You Look Tonight",
    artist: "Frank Sinatra",
    requested: "no"
  },
  {
    category: "general",
    title: "Three Wooden Crosses",
    artist: "Randy Travis",
    requested: "no"
  },
  {
    category: "general",
    title: "Wagon Wheel",
    artist: "Old Crow Medicine Show",
    requested: "no"
  },
  {
    category: "general",
    title: "Wake Me Up",
    artist: "Avicii",
    requested: "no"
  },
  {
    category: "general",
    title: "Weekend",
    artist: "Sambuck",
    requested: "no"
  },
  {
    category: "general",
    title: "Wild Mountain Thyme",
    artist: "Traditional",
    requested: "no"
  },
  {
    category: "general",
    title: "Wildflowers",
    artist: "Tom Petty",
    requested: "no"
  },
  {
    category: "general",
    title: "Wind and Anchor",
    artist: "The National Parks",
    requested: "no"
  },
  {
    category: "general",
    title: "Wonderful World (Sam Cooke)",
    artist: "Sam Cooke",
    requested: "no"
  },
  {
    category: "general",
    title: "Wonderwall",
    artist: "Oasis",
    requested: "no"
  },
  {
    category: "general",
    title: "Yesterday/Tomorrow",
    artist: "Beatles/From 'Annie'",
    requested: "no"
  },
  {
    category: "general",
    title: "You Are My Sunshine",
    artist: "Various Artists",
    requested: "no"
  },
  {
    category: "general",
    title: "You Are The Reason",
    artist: "Calum Scott",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "All I Want for Christmas Is You",
    artist: "Michael Buble",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "Auld Lang Syne",
    artist: "James Taylor",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "Baby It’s Cold Outside",
    artist: "Frank Sinatra, Dorothy Kirsten",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "Blue Christmas",
    artist: "Elvis Presley",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "Have Yourself A Merry Little Christmas",
    artist: "Traditional",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "I’ll Be Home For Christmas",
    artist: "Bing Crosby",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "In the Bleak Midwinter",
    artist: "James Taylor",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "It’s Beginning to Look a Lot Like Christmas",
    artist: "Bing Crosby",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "It’s the Most Wonderful Time of the Year",
    artist: "Andy Williams",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "Last Christmas",
    artist: "Wham",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "Let It Snow",
    artist: "",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "Light Of The World",
    artist: "Lauren Daigle",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "Make Room",
    artist: "Casting Crowns",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "Mary Did You Know",
    artist: "Mark Lowry",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "Noel",
    artist: "Lauren Daigle",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "O Holy Night",
    artist: "Traditional",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "Rockin’ Around the Christmas Tree",
    artist: "",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "Santa Claus Is Comin’ to Town",
    artist: "Bruce Springsteen",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "Silent Night",
    artist: "Traditional",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "Silver Bells",
    artist: "",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "Sleigh Ride",
    artist: "Ella Fitzgerald",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "When Love Crossed Over",
    artist: "Paul Baloche",
    requested: "no"
  },
  {
    category: "Christmas",
    title: "White Christmas",
    artist: "Bing Crosby",
    requested: "no"
  }
];
function _page($$payload, $$props) {
  push();
  let requestId = 0;
  let songPick = "";
  const each_array = ensure_array_like(requests);
  const each_array_1 = ensure_array_like(songs);
  $$payload.out += `<section class="request flex max-w-5xl flex-col items-center justify-center py-6"><form class="w-2/3 rounded-xl border border-gray-300 p-6"><div class="text-center"><a href="/" class="contents"><img src="/images/aw-logo-burg.png" alt="" class="mb-6"></a> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let request = each_array[$$index];
    if (request.id == requestId) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<h4>Welcome ${escape_html(request.firstname)}!</h4> <p>Comments: ${escape_html(request.comments)}</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--> <p class="md:text-lg">Pick a song from our list below.</p></div> <div class="flex flex-col items-start"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let song = each_array_1[$$index_1];
    if (song.requested === "no" && song.category === "general") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="form-control"><label class="label cursor-pointer"><input type="radio" name="songchecked"${attr("id", song.title)} class="radio"${attr("value", `${stringify(song.title)} (${stringify(song.artist)})`)}${attr("checked", songPick === `${stringify(song.title)} (${stringify(song.artist)})`, true)}> <span class="ml-4 label-text">${escape_html(song.title)} (${escape_html(song.artist)})</span></label></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div> <div class="songpick my-12 font-bold"><p>You have picked ${escape_html(songPick)}</p></div> <div class="flex justify-center"><button type="submit" class="btn flex justify-center bg-gray-700 text-white hover:bg-gray-800">Send your request</button></div></form></section>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-4ndPv2tW.js.map
