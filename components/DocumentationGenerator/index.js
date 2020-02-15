import React, { Fragment } from 'react';
import { get, map } from 'lodash';
import { get as getFp } from 'lodash/fp';
import FunctionCard from '../FunctionCard';
import './style.scss';

const documentationContext = require.context('../../functions', true, /\.(js)$/);
const PARENT_FOLDER_REGEX = /\.\/(.+)\//;

const DocumentationGenerator = () => {
    const documentation = documentationContext.keys().sort().reduce((acc, filename) => {
        const key = PARENT_FOLDER_REGEX.exec(filename)[1];
        const current = get(acc, `[${key}]`, []);

        return {
            ...acc,
            [key]: [...current, documentationContext(filename).default]
        }
    }, {});

    return map(documentation, (functions, methodKind) => (
        <Fragment key={methodKind}>
            <div className="functions-wrapper">
                <h2>"{methodKind}" Methods</h2>
                {functions.sort(getFp('name')).map(FunctionCard)}
            </div>
        </Fragment>
    ));
};

export default DocumentationGenerator;
