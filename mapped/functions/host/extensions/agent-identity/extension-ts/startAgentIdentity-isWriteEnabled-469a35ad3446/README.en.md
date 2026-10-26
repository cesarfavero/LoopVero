# `startAgentIdentity/isWriteEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496613-496613](../../../../../../../reference/runtime/host-main.cjs#L496613-L496613) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496613-496613](../../../../../../../reference/runtime/host-main.cjs#L496613-L496613) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:496613 uses an implicit arrow-function return.

### host:496613

Calls written directly in this body: `getCreationPolicy`.

SHA-256 of the source span: `311d84c5e34c8d4292a17258b4b33d2f64d3105bbacf297d9edd2ecbf733a8be`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
