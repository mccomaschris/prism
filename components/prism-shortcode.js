Prism.languages.shortcode = {
    'comment': /<!--[\s\S]*?-->/,
    'prolog': /\[\?[\s\S]+?\?\]/,
    'tag': {
        pattern: /\[\/?(?!\d)[^\s\]\/=$<%]+(?:\s(?:\s*[^\s\]\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/\]])))+)?\s*\/?\]/i,
        greedy: false,
        inside: {
            'tag': {
                pattern: /^\[?\/?[^\s\]\/]+/i,
                inside: {
                    'punctuation': /^\[\/?/,
                    'namespace': /^[^\s\]\/:]+:/
                }
            },
            'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
                inside: {
                    'punctuation': [
                        /^=/,
                        {
                            pattern: /^(\s*)["']|["']$/,
                            lookbehind: true
                        }
                    ]
                }
            },
            'punctuation': /\/?\]/,
            'attr-name': {
                pattern: /[^\s\]\/]+/,
                inside: {
                    'namespace': /^[^\s\]\/:]+:/
                }
            }

        }
    },
    'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.shortcode = Prism.languages['shortcode'];
