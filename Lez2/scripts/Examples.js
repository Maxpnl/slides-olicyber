import React, { useState, useEffect, useRef } from 'react';

export const ExampleDatabase = () => {

    const [utenti, setUtenti] = useState([]);
    const [query, setQuery] = useState("");
    const [queryResp, setQueryResp] = useState([]);
    const inp = useRef(); 

    const submitQuery = () => {
        console.log(query)
        console.log(JSON.stringify({ sql: query }))
        fetch("http://127.0.0.1:5000/sql", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ sql: query })
        }).then(res => res.json())
            .then(res => {
                setUtenti(res['utenti']);
                setQueryResp(res["query"])
            }).catch(e => {
                setQueryResp([["ERROR!"]])
            })
    }

    useEffect(
        () => {
            fetch("http://127.0.0.1:5000/sql", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ sql: '' })
            }).then(res => res.json())
                .then(res => setUtenti(res['utenti']));
            inp.current.addEventListener("keydown", (e) => {e.stopPropagation()})
        },
        []
    )

    return <div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>username</th>
                    <th>email</th>
                    <th>password</th>
                    <th>nome</th>
                    <th>cognome</th>
                </tr>
            </thead>
            <tbody>
                {utenti.map(function (utente, i) {
                    return <tr key={i}>
                        {utente.map((val, i) => <td key={i}>{val}</td>)}
                    </tr>;
                })}
            </tbody>
        </table>
        <input ref={inp} type="text" onChange={(e) => setQuery(e.target.value) } style={{ width: "100%", margin: "20px" }} value={query}></input>
        <button onClick={() => submitQuery()}>Invia</button>
        <table>
            <tbody>
                {queryResp.map(function (queryz, i) {
                    return <tr key={i}>
                        {queryz.map((val2, i) => <td key={i}>{val2}</td>)}
                    </tr>;
                })}
            </tbody>
        </table>
    </div>;
}