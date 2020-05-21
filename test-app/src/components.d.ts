/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LocalStore {
    }
    interface SessionStore {
    }
}
declare global {
    interface HTMLLocalStoreElement extends Components.LocalStore, HTMLStencilElement {
    }
    var HTMLLocalStoreElement: {
        prototype: HTMLLocalStoreElement;
        new (): HTMLLocalStoreElement;
    };
    interface HTMLSessionStoreElement extends Components.SessionStore, HTMLStencilElement {
    }
    var HTMLSessionStoreElement: {
        prototype: HTMLSessionStoreElement;
        new (): HTMLSessionStoreElement;
    };
    interface HTMLElementTagNameMap {
        "local-store": HTMLLocalStoreElement;
        "session-store": HTMLSessionStoreElement;
    }
}
declare namespace LocalJSX {
    interface LocalStore {
    }
    interface SessionStore {
    }
    interface IntrinsicElements {
        "local-store": LocalStore;
        "session-store": SessionStore;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "local-store": LocalJSX.LocalStore & JSXBase.HTMLAttributes<HTMLLocalStoreElement>;
            "session-store": LocalJSX.SessionStore & JSXBase.HTMLAttributes<HTMLSessionStoreElement>;
        }
    }
}
