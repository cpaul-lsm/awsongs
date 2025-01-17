import { a as attr } from './attributes-BeaNKpgU.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { c as pop, p as push } from './index-RKtuUzxt.js';
import './client-Dy-68ShQ.js';
import './exports-Drw7bup6.js';

function _page($$payload, $$props) {
  push();
  function getCurrentTime() {
    const now = /* @__PURE__ */ new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  function getTodayDate() {
    const now = /* @__PURE__ */ new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  const currentTime = getCurrentTime();
  const todaysDate = getTodayDate();
  const id = Math.floor(Math.random() * 1e6);
  const requestDetails = {
    id,
    date: todaysDate,
    time: currentTime,
    firstname: "",
    comments: ""
  };
  $$payload.out += `<section class="request flex max-w-5xl flex-col items-center justify-center py-6"><form action="/request/r2" class="w-2/3 rounded-xl border border-gray-300 p-6"><div class="text-center"><a href="/" class="contents"><img src="/images/aw-logo-burg.png" alt="" class="mb-6"></a> <p class="md:text-lg">We love to sing songs people enjoy. <br> Pick a song from our list and we will play it for you. <br> <span class="text-sm">You can also dedicate the song to someone or leave a message for us.</span></p></div> <label class="input input-bordered flex items-center gap-2"><i class="bi bi-person-fill opacity-70"></i> <input type="text" name="firstname" class="w-11/12"${attr("value", requestDetails.firstname)} placeholder="First name"></label> <textarea placeholder="Dedication or Comment" class="textarea textarea-bordered mt-6 w-11/12">`;
  const $$body = escape_html(requestDetails.comments);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="flex justify-center"><button type="submit" class="btn flex justify-center bg-gray-700 text-white hover:bg-gray-800">Get Started!</button></div></form></section>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CJvQW6On.js.map
