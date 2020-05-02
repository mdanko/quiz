import React, { Reducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { shuffle, sample } from 'underscore';
import './App.css';
import { AuthorQuiz, Author, TurnData } from './AuthorQuiz';
import { HighlightKey } from './Turn';
import { AddAuthor } from './AddAuthor';


type Authors = Author[]

interface State {
  authors: Authors;
  turnData: TurnData;
  highlight: HighlightKey;
}

type Action = {
  type: "ANSWER_SELECTED";
  answer: string
} | {
  type: "CONTINUE"
} | {
  type: "ADD_AUTHOR",
  author: Author
}

const emptyAuthor: Author = {
  name: "",
  imageUrl: "",
  imageSource: "",
  books: []
};
const authors: Authors = [{
  name: "Mark Twain",
  imageUrl: "images/authors/Mark_Twain.jpg",
  imageSource: "Wikimedia Commons",
  books: [
    "The Adventures of Huckleberry Finn",
    "Life on the Mississippi",
    "Roughing It"
  ]
}, {
  name: "J K Rowling",
  imageUrl: "images/authors/J._K._Rowling.jpg",
  imageSource: "Wikimedia Commons",
  books: [
    "Harry Potter and the Philosopher's Stone",
    "Fantastic Beasts and Where to Find Them",
    "The Silkworm"
  ]
}, {
  name: "Charles Dickens",
  imageUrl: "images/authors/Charles_Dickens.jpg",
  imageSource: "Wikimedia Commons",
  books: [
    "Oliver Twist",
    "David Copperfield",
    "A Tale of Two Cities"
  ]
}, {
  name: "William Shakespeare",
  imageUrl: "images/authors/William_Shakespeare.jpg",
  imageSource: "Wikimedia Commons",
  books: [
    "Hamlet",
    "Macbeth",
    "Romeo and Juliet"
  ]
}, {
  name: "Stephen King",
  imageUrl: "images/authors/Stephen_King.jpg",
  imageSource: "Wikimedia Commons",
  books: [
    "The Shining",
    "IT",
    "The Dark Tower: The Gunslinger"
  ]
}];

const getTurnData = (authors: Authors): TurnData => {
  const allBooks: string[] = authors.reduce<string[]>((acc, author) => acc.concat(author.books), []);
  const fourRandomBooks: string[] = shuffle<string>(allBooks).slice(0, 4);
  const answer: string = sample(fourRandomBooks);
  const author: Author | undefined = authors.find((author) => author.books.some((book) => book === answer));

  return {
    books: fourRandomBooks,
    author: author || emptyAuthor
  };
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ANSWER_SELECTED":
      const isCorrect: boolean = state.turnData.author.books.some((book) => book === action.answer);

      return {
        ...state,
        highlight: isCorrect ? "correct" : "wrong"
      };
    case "CONTINUE":
      return {
        ...state,
        turnData: getTurnData(state.authors),
        highlight: "none"
      };
    case "ADD_AUTHOR":
      return {
        ...state,
        authors: state.authors.concat(action.author)
      };
    default:
      return state
  }
};

const usePersistedState = (reducer: React.Reducer<State, Action>, key: string, initialState: State): [State, React.Dispatch<Action>] => {
  const persistedState: string | null = localStorage.getItem(key);
  const [state, dispatch] = React.useReducer(reducer, {
    ...initialState, authors: persistedState !== null ? JSON.parse(persistedState).authors : initialState.authors
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
};

const App: React.FC = () => {
  const [state, dispatch] = usePersistedState(reducer, "STATE", { authors, turnData: getTurnData(authors), highlight: "none" });

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() =>
          <AuthorQuiz
            {...state}
            onAnswerSelected={
              (answer: string) => {
                dispatch({ type: "ANSWER_SELECTED", answer })
              }
            }
            onContinue={() => { dispatch({ type: "CONTINUE" }); }}
          />}
        />
        <Route path="/add" exact render={(props) =>
          <AddAuthor {...props} onAddAuthor={(author) => { dispatch({ type: "ADD_AUTHOR", author }); }}
          />}
        />
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
