import BookType from './Book';

export interface PropsForChild {
    allBooks: BookType[];
    changeShelf: Function
} 