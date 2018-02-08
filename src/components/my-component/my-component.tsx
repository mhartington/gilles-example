import { Component, Prop } from '@stencil/core';
import _ from 'lodash';
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;
  componentDidLoad(){
    console.log(_.camelCase)
  }
  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
