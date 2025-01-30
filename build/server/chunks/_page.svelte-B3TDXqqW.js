import { e as ensure_array_like, c as pop, p as push } from './index-RKtuUzxt.js';
import { r as requests } from './requests-EkaszudT.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function _page($$payload, $$props) {
  push();
  let requestId = 0;
  const each_array = ensure_array_like(requests);
  const each_array_1 = ensure_array_like(requests);
  $$payload.out += `<section class="request-result flex max-w-5xl flex-col items-center justify-center py-6"><div class="flex w-2/3 flex-col items-center rounded-xl border border-gray-300 p-12"><a href="/" class="contents"><img src="/images/aw-logo-burg.png" alt="" class="mb-12 px-12"></a> <p class="text-center"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let request = each_array[$$index];
    if (request.id == requestId) {
      $$payload.out += "<!--[-->";
      $$payload.out += `Thank you <strong>${escape_html(request.firstname)}</strong> for requesting a song. <br> We will play <strong>${escape_html(request.song)}</strong> for you shortly.`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></p> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let request = each_array_1[$$index_1];
    if (request.id == requestId) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p class="text-center"><span class="font-bold">Comments:</span><br> ${escape_html(request.comments)}</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--> <h5 class="mt-6 text-center">Like our music? Support us!</h5> <div class="flex"><a href="/tips" class="btn mr-6 flex bg-gray-800 text-white hover:bg-gray-700 hover:text-white">Send a Tip</a> <a href="/contact" class="btn flex bg-gray-600 text-white hover:bg-gray-500 hover:text-white">Follow Us</a></div></div></section>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-B3TDXqqW.js.map
