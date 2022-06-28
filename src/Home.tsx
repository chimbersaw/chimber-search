import React from "react";
import styles from "./Home.module.css"
import {redirect} from "./Search";

interface IProps {
}

interface IState {
    query?: string;
}

export default class Home extends React.Component<IProps, IState> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            query: undefined
        };
    }

    handleChange = (event: { target: { value: string; }; }) => {
        const value = event.target.value;
        this.setState({
            query: value
        });
    };

    handleKeyDown = (event: { key: string; }) => {
        if (event.key === "Enter") {
            redirect(this.state.query)
        }
    };

    render() {
        return (
            <div className={styles.bar}>
                <input
                    className={styles.input}
                    placeholder="chimchima"
                    value={this.state.query}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    }
}
