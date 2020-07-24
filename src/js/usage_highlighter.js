import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import processString from 'react-process-string';

function Usage(props) {
    let process = processString([
        {
        regex: /(boolean|number|string|table|wstring|void)/g,
        fn: (_, result) => <Link key={"type_" + Math.floor(Math.random() * 100)} to={useBaseUrl(`docs/datatypes/${result[0].toLowerCase()}`)}>{result[0].toLowerCase()}</Link>
        }
    ])(props.input);

    for(let i = 0; i < process.length; ++i) {
        if(typeof process[i] === "string") {
            process[i] = React.createElement('span', { key: "text_" + Math.floor(Math.random() * 100) }, process[i]);
        }
    }
    
    return <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-src-theme-MDXComponents-">
    <div className="codeBlockContent_node_modules-@docusaurus-theme-classic-src-theme-CodeBlock-">
        <div className="prism-code codeBlock_node_modules-@docusaurus-theme-classic-src-theme-CodeBlock-">
            <div className="codeBlockLines_node_modules-@docusaurus-theme-classic-src-theme-CodeBlock-" style={{
                color: "rgb(191, 199, 213)",
                backgroundColor: "rgb(41, 45, 62)"
            }}>
                <div style={{
                    color: "rgb(191, 199, 213)"
                }}>
                    {process}
                </div>
            </div>
        </div>
    </div>
</div>
};

export default Usage;