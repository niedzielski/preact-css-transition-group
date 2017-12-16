declare module "preact-css-transition-group" {
  import {
    Component,
    ComponentProps,
    FunctionalComponent,
    AnyComponent
  } from "preact";

  interface CSSTransitionGroupProps<
    C extends Component<any, any> | FunctionalComponent<any>
  > extends ComponentProps<C> {
    transitionName: string;
    /** Defaults to true. */
    transitionEnter?: boolean;
    /** Defaults to true. */
    transitionLeave?: boolean;
    transitionEnterTimeout?: number;
    transitionLeaveTimeout?: number;

    /**
     * The Preact AnyComponent or DOM component string used to render the
     * CSSTransitionGroup. Defaults to 'span'.
     */
    component?: AnyComponent<any, any> | string;

    /**
     * Any additional properties specified on the CSSTransitionGroup will be
     * passed to component. e.g.:
     *   <CSSTransitionGroup transitionName='foo' component='div' class='foo'
     *     bar={1}>
     *     ... children ...
     *   </CSSTransitionGroup>
     * Will render as:
     *   <div class='foo' bar='1'>... children ...</div>
     */
    [name: string]: any;
  }

  // todo: import from Preact instead pending
  // https://github.com/developit/preact/pull/869.
  type ComponentChild = JSX.Element | string;
  type ComponentChildren = ComponentChild[];

  interface CSSTransitionGroupState {
    children: ComponentChildren;
  }

  type Key = string | number | any;

  export default abstract class CSSTransitionGroup extends Component<
    CSSTransitionGroupProps<CSSTransitionGroup>,
    any
  > {
    performEnter(key: Key): void;
    performLeave(key: Key): void;
    stop(key: Key): void;
  }
}
