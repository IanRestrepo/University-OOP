import hljs from 'https://cdn.skypack.dev/highlight.js';
        
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach((codeBlock) => {
            hljs.highlightBlock(codeBlock);
        });