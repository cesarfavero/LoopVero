# `createMessagesGrantsAsks/open13`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/messages-grants/asks.ts` · [Module README](../../../../../../modules/core/runner/messages-grants/asks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703061-703072](../../../../../../../reference/runtime/host-main.cjs#L703061-L703072) | `ArrowFunctionExpression` | no | `requestId2, grants` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703061-703072](../../../../../../../reference/runtime/host-main.cjs#L703061-L703072) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:703061

Calls written directly in this body: `askTtl.arm`, `listener`, `new Map`, `park`.

Assignment or increment targets: `state`.

SHA-256 of the source span: `bd139d33cb749fc9acc6e012af9cdcceb3f1069e594155934b571370b653038d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
