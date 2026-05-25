const DEFAULT_ICON_MAP = {
  github: { title: "GitHub", className: "bi-github" },
  gitlab: { title: "GitLab", className: "bi-gitlab" },
  sourceforge: { title: "SourceForge", className: "bi-sourceforge" },
  android: { title: "Android", className: "bi-android2" },
  apple: { title: "Apple OS", className: "bi-apple" },
  browser: { title: "Browser extension", className: "bi-browser-chrome" },
  indexes: { title: "Indexes", className: "bi-folder-fill" },
  cli: { title: "CLI", className: "bi-terminal-fill" },
  linux: { title: "Linux", className: "bi-tux" },
  web: { title: "Web", className: "bi-globe2" },
  windows: { title: "Windows", className: "bi-windows" },
  add: { title: "Added", className: "bi-file-earmark-plus-fill" },
  del: { title: "Delete", className: "bi-trash-fill" },
};

export function iconLink(md, options = {}) {
  if (!md?.renderer?.rules) return;

  const ICON_MAP = { ...DEFAULT_ICON_MAP, ...(options.icons || {}) };

  const defaultTextRule =
    md.renderer.rules.text ||
    ((tokens, idx, opts, env, self) => self.renderToken(tokens, idx, opts));

  md.renderer.rules.text = (tokens, idx, opts, env, self) => {
    const text = tokens[idx].content;

    const processedText = text.replace(
      /\[([a-zA-Z0-9_-]+)\]/g,
      (match, key) => {
        const icon = ICON_MAP[key.toLowerCase()];
        if (!icon) return match;
        return `<i class="bi ${icon.className}" title="${icon.title}" aria-hidden="true"></i>`;
      },
    );

    if (processedText !== text) {
      return processedText;
    }
    return defaultTextRule(tokens, idx, opts, env, self);
  };

  const defaultLinkOpen =
    md.renderer.rules.link_open ||
    ((tokens, idx, opts, env, self) => self.renderToken(tokens, idx, opts));

  md.renderer.rules.link_open = (tokens, idx, opts, env, self) => {
    const token = tokens[idx];
    const href = token.attrGet("href") || "";
    const isExternal = /^https?:\/\//i.test(href);

    const setSafeAttributes = (t) => {
      t.attrSet("target", "_blank");
      t.attrSet("rel", "noopener noreferrer");
    };

    let iconKey = null;
    let textToken = null;

    for (let i = idx + 1; i < tokens.length; i++) {
      if (tokens[i].type === "link_close") break;
      if (tokens[i].type === "text") {
        const content = tokens[i].content.trim().toLowerCase();
        if (ICON_MAP[content]) {
          iconKey = content;
          textToken = tokens[i];
        }
        break;
      }
    }

    if (iconKey) {
      const icon = ICON_MAP[iconKey];
      token.attrSet("title", icon.title);
      token.attrSet("aria-label", icon.title);

      if (isExternal || options.forceBlank) {
        setSafeAttributes(token);
      }

      textToken.content = `<i class="bi ${icon.className}" aria-hidden="true"></i>`;
      textToken.type = "html_inline";
    } else if (options.externalOnly && isExternal) {
      setSafeAttributes(token);
    }

    return defaultLinkOpen(tokens, idx, opts, env, self);
  };
}

export default iconLink;
