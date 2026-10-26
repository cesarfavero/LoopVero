# `evaluateOnTarget/<callback>/<callback>/finish`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547177-547184](../../../../../../../reference/runtime/host-main.cjs#L547177-L547184) | `ArrowFunctionExpression` | no | `error64, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547177-547184](../../../../../../../reference/runtime/host-main.cjs#L547177-L547184) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:547177

Calls written directly in this body: `reject2`, `resolve31`, `signal.removeEventListener`, `socket.close`.

Assignment or increment targets: `settled`.

SHA-256 of the source span: `f5dd1d1e77ce6b13b64c2143c71aae8f615a463b637d57f6449d3b7fd636e8b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
