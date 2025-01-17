import { e as ensure_array_like, c as pop, p as push } from './index-RKtuUzxt.js';
import { r as requests } from './requests-DcQxKDSs.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function _page($$payload, $$props) {
  push();
  function getTodayDate() {
    const now = /* @__PURE__ */ new Date();
    const options = {
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    const [
      { value: month },
      ,
      { value: day },
      ,
      { value: year }
    ] = formatter.formatToParts(now);
    return `${year}-${month}-${day}`;
  }
  function getNewDate() {
    const now = /* @__PURE__ */ new Date();
    const options = {
      timeZone: "America/New_York",
      year: "numeric",
      month: "long",
      day: "2-digit"
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    const [
      { value: month },
      ,
      { value: day },
      ,
      { value: year }
    ] = formatter.formatToParts(now);
    return `${month} ${day} ${year}`;
  }
  const todayDate = getTodayDate();
  const currentDate = getNewDate();
  const sortedRequests = requests.slice().sort((a, b) => {
    return /* @__PURE__ */ new Date(a.date + "T" + a.time) - /* @__PURE__ */ new Date(b.date + "T" + b.time);
  });
  const each_array = ensure_array_like(sortedRequests);
  $$payload.out += `<section class="watch mx-auto flex max-w-5xl flex-col items-center justify-center"><p class="text-lg mt-6">Requested Songs on ${escape_html(currentDate)}</p> <table class="table table-zebra"><thead><tr class="bg-gray-800 text-lg text-white"><th>Name</th><th>Song</th><th>Time</th></tr></thead><tbody><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let pick = each_array[$$index];
    if (pick.date === todayDate) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<tr><td>${escape_html(pick.firstname)}</td><td>${escape_html(pick.song)}</td><td>${escape_html(pick.time)}</td></tr> <tr><td colspan="3">"${escape_html(pick.comments)}""</td></tr>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></tbody></table></section>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-y18gHQsl.js.map
