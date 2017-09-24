import React, { Component } from 'react';
import { TagBox } from 'react-tag-box';
import { List } from 'immutable';
import studentDB from '../data/students';

const sampleTags = List(
  ['java', 'python', 'baz', 'blitz', 'quux', 'barf', 'balderdash'].map(t => ({
    label: t,
    value: t
  }))
)

class SearchBar extends Component {

  state = {
    tags: sampleTags,
    selected: sampleTags.take()
  }

  renderResults(results){
    const toDisplay = [];

    studentDB.map((object) => {
      let index = toDisplay.length;

      return results.map(tag => {
        return object.skills.map(studentTag => {
          if(tag.value === studentTag.skill){
            toDisplay[index] = object;
            //console.log(toDisplay);
          }
          return null;
        })
      })

    });

    this.props.update(toDisplay);
  }


  render() {
    const { tags, selected } = this.state
    const onSelect = tag => {
      const newTag = {
        label: tag.label,
        value: tag.value || tag.label
      }

      this.setState({
        selected: selected.push(newTag)
      })
    }

    const remove = tag => {
      this.setState({
        selected: selected.filter(t => t.value !== tag.value)
      })
    }

    const placeholder = selected.isEmpty() ? '' :
      "Use the backspace key to delete the last tag";



    return (
      <div>
      <TagBox
        tags={tags.toJS()}
        selected={selected.toJS()}
        onSelect={onSelect}
        removeTag={remove}
        backspaceDelete={true}
        placeholder={placeholder}
      />
      <button className="btn btn-primary" onClick={() => this.renderResults(selected.toJS())}>Search</button>
      </div>
    )
  }
}

export default SearchBar;
