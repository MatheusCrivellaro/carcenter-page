import React from "react";

export interface FilterConfig {
    title: string,
    value: string[],
    group: string,
    handle: (e: React.ChangeEvent<HTMLInputElement>) => void,
    todos: boolean,
    selected: string
}
