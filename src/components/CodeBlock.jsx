import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import csharp from "react-syntax-highlighter/dist/esm/languages/prism/csharp";
import java from "react-syntax-highlighter/dist/esm/languages/prism/java";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import { vscDarkPlus, vs } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("csharp", csharp);
SyntaxHighlighter.registerLanguage("java", java);
SyntaxHighlighter.registerLanguage("javascript", javascript);

export default function CodeBlock({ code, language = "csharp", dark = true }) {
    return (
        <SyntaxHighlighter language={language} style={dark ? vscDarkPlus : vs} showLineNumbers>
            {code}
        </SyntaxHighlighter>
    );
}