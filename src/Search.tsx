import React from "react";

export const redirect = (query: string | null | undefined) => {
    if (query) {
        const cyrillicPattern = /[\u0400-\u04FF]/;
        const englishPattern = /[a-zA-Z]/;

        const cyrillic = query.match(cyrillicPattern) !== null
        const english = query.match(englishPattern) !== null

        if (english && !cyrillic) {
            window.open("https://www.google.com/search?q=" + query, "_self")
        } else {
            window.open("https://www.yandex.ru/search/?text=" + query, "_self")
        }
    }
}

export default class Search extends React.Component {
    componentWillMount() {
        const queryParams = new URLSearchParams(window.location.search)
        const query = queryParams.get("query")
        redirect(query)
    }

    render() {
        return (<section>Redirecting...</section>);
    }
}
