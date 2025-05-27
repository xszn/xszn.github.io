/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, d as addAttribute } from '../chunks/astro/server_BBoAqXZx.mjs';
import 'kleur/colors';
import { g as getEntry, $ as $$Base, c as config, m as markdownify } from '../chunks/_astro_content_CNUuSX4N.mjs';
import { FaTelegram } from 'react-icons/fa';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getEntry("pages", "contact");
  const { contact_form_action } = config.params;
  const { address, email, phone, telegram } = config.contactinfo;
  const { title, description, meta_title, image } = entry.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title + config.site.titleDelimiter, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <h1 class="h2 page-heading">${unescapeHTML(markdownify(title))}</h1> <div class="row md:gx-5 gy-5"> <div class="sm:col-5 md:col-4"> <p class="mb-8 text-2xl font-bold text-theme-dark">联系方式</p> <ul class="flex flex-col space-y-8"> ${address} ${email} ${phone} ${renderTemplate`<li> <div class="flex text-theme-dark items-center text-xl"> ${renderComponent($$result2, "FaTelegram", FaTelegram, { "className": "mr-3 text-primary" })} <p class="font-semibold">Telegram</p> </div> <p class="mt-2 leading-5 pl-8">${unescapeHTML(markdownify(telegram))}</p> </li>`} </ul> </div> <div class="sm:col-7 md:col-8"> <form class="contact-form row gy-2 justify-center" method="POST"${addAttribute(contact_form_action, "action")}> <div class="lg:col-6"> <label class="mb-2 block" for="name">名称 <span class="text-red-600">*</span></label> <input class="form-input w-full" name="name" type="text" required> </div> <div class="lg:col-6"> <label class="mb-2 block" for="email">电子邮件 <span class="text-red-600">*</span></label> <input class="form-input w-full" name="email" type="email" required> </div> <div class="col-12"> <label class="mb-2 block" for="subject">主题</label> <input class="form-input w-full" name="subject" type="text"> </div> <div class="col-12"> <label class="mb-2 block" for="message">信息 <span class="text-red-600">*</span></label> <textarea class="form-textarea w-full" rows="4"></textarea> </div> <div class="col-12"> <button class="btn btn-primary mt-2">立即提交（已关闭）</button> </div> </form> </div> </div> </div> </section> ` })}`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/contact.astro", void 0);

const $$file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
