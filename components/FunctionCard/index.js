import React, { Fragment } from 'react';
import { isNil } from 'lodash';
import SyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-eighties';
import './style.scss';

const FunctionCard = ({ name, arguments: params, description, returns, example }) => (
    <section key={name} className="function-card">
        <h3 className="name">
            R_.{name}(
                {params.map(({ name, default: defaultValue }, index) => (
                    <Fragment key={name}>
                        {!isNil(defaultValue) && '['}
                        <span>{name}</span>
                        {!isNil(defaultValue) && (<span>
                            &nbsp;{'='}&nbsp;{defaultValue}
                        </span>)}
                        {!isNil(defaultValue) && ']'}
                        {index !== params.length - 1 && <span>
                            {','}&nbsp;
                        </span>}
                    </Fragment>
                ))}
            )
        </h3>
        <p>{description}</p>
        {params.length && (
            <>
                <h4>Arguments</h4>
                <ul className="arguments-list">
                    {params.map(({ name, type, description }) => (
                        <li key={name}>
                            <strong>{name}</strong> {' '}
                            <strong>({type})</strong>{' '} : {' '}
                            <span>{description}</span>
                        </li>
                    ))}
                </ul>
            </>
        )}
        {returns && (
            <>
                <h4>Returns</h4>
                <div className="returns-content">
                    <strong>({returns.type})</strong>{' '} : {' '}
                    <span>{returns.description}</span>
                </div>
            </>
        )}
        {example && (
            <>
                <h4>Example</h4>
                <div className="example-content">
                    <SyntaxHighlighter language="ruby"
                        style={style} customStyle={{ textAlign: "left" }}>
                        {example}
                    </SyntaxHighlighter>
                </div>
            </>
        )}
        <hr/>
    </section>
);

export default FunctionCard;
