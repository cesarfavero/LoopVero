# `createChildController/propagate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/core.js` · [Module README](../../../../modules/context/core-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225264-225264](../../../../../reference/runtime/host-main.cjs#L225264-L225264) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:1752-1752](../../../../../reference/runtime/sand-eval-runner.cjs#L1752-L1752) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225264-225264](../../../../../reference/runtime/host-main.cjs#L225264-L225264) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:225264 uses an implicit arrow-function return.
| [evaluation:1752-1752](../../../../../reference/runtime/sand-eval-runner.cjs#L1752-L1752) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:1752 uses an implicit arrow-function return.

### host:225264

Calls written directly in this body: `controller.abort`.

SHA-256 of the source span: `a8b4a3a47b050d411f21a08f9ef86a8e1082de2a12e7c07b015efc17fa12ae4b`.

### evaluation:1752

Calls written directly in this body: `controller.abort`.

SHA-256 of the source span: `a8b4a3a47b050d411f21a08f9ef86a8e1082de2a12e7c07b015efc17fa12ae4b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
