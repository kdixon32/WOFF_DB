import React, { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { Button, Collapse } from "react-bootstrap";
import {
    InstantSearch,
    Hits,
    SearchBox,
} from 'react-instantsearch-dom';

export default function Search() {
    const [open, setOpen] = useState(false);


    const Hit = ({ hit }) => (
        <div>
            <p className="Name">{hit.Name}</p>
            <div className="Details">
                <p>Size: {hit.Size}</p>
                <p>Weight: {hit.Weight}</p>
                <p>Location: {hit.Location}</p>
                <p>Prismunity: {hit.Prismunity}</p>
                <Button
                    size="sm"
                    variant="info"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>Show More Info
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        <p>Active Skills: {hit.Active_Skills}</p>
                        <p>Passive Skills: {hit.Passive_Skills}</p>
                        <p>Field Skills: {hit.Field_Skills}</p>
                        <p>Magic: {hit.MAG_Growth}</p>
                    </div>
                </Collapse>
            </div>
        </div>
    )

    const APP_ID = process.env.REACT_APP_APP_ID;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const searchClient = algoliasearch(
        APP_ID,
        API_KEY,
    );

    return (
        <InstantSearch indexName={'WOFF-index'} searchClient={searchClient}>
            <div className="search">
                <SearchBox />
            </div>
            <Hits hitComponent={Hit} />
        </InstantSearch>
    )
}
