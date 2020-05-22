import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import "./Suggestions.css";

const languages = [
  {
    name: "Produce",
  },
  {
    name: "Meat",
  },
  {
    name: "SeaFood",
  },
  {
    name: "Meal Kits",
  },
  {
    name: "Deli",
  },
  {
    name: "Dairy",
  },
  {
    name: "Beverages",
  },
  {
    name: "Bread",
  },
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  return languages.filter((language) => regex.test(language.name));
}

function getSuggestion(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return <span>{suggestion.name}</span>;
}

class Suggestions extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsGet = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClear = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search",
      value,
      onChange: this.onChange,
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsGet={this.onSuggestionsGet}
        onSuggestionsClear={this.onSuggestionsClear}
        getSuggestion={getSuggestion}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default Suggestions;
