import { CoverProps } from "./CoverProps";

export default interface Book {
    id: string;
    shelf: string;
    imageLinks: CoverProps;
    title: string;
    authors: string[];
}

// for development only
export type FixMeLater = any;