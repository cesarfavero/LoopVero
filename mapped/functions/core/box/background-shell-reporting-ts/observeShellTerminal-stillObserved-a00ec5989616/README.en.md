# `observeShellTerminal/stillObserved`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/background-shell-reporting.ts` · [Module README](../../../../../modules/core/box/background-shell-reporting-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:590363-590363](../../../../../../reference/runtime/host-main.cjs#L590363-L590363) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:590363-590363](../../../../../../reference/runtime/host-main.cjs#L590363-L590363) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:590363 uses an implicit arrow-function return.

### host:590363

Calls written directly in this body: `.some`, `registry3.listWork`.

SHA-256 of the source span: `0e9e8b14b9a4d54a34292ad1e78160334d3efb129b8b1c2447838d46de6f99ad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
