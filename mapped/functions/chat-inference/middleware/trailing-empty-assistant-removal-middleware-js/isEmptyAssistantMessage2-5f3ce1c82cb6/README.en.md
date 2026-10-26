# `isEmptyAssistantMessage2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/trailing-empty-assistant-removal-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/trailing-empty-assistant-removal-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617930-617938](../../../../../../reference/runtime/host-main.cjs#L617930-L617938) | `FunctionDeclaration` | no | `message` |
| [evaluation:287301-287309](../../../../../../reference/runtime/sand-eval-runner.cjs#L287301-L287309) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617930-617938](../../../../../../reference/runtime/host-main.cjs#L617930-L617938) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:287301-287309](../../../../../../reference/runtime/sand-eval-runner.cjs#L287301-L287309) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:617930

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `9f5dfc16397ac7b76e67fa17ccbe688309437c7af1b3da166110d9afb1079049`.

### evaluation:287301

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `9f5dfc16397ac7b76e67fa17ccbe688309437c7af1b3da166110d9afb1079049`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
