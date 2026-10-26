# `createSandDurableFileOwner/once2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/durable-file-owner.ts` · [Module README](../../../../modules/shared/durable-file-owner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453439-453445](../../../../../reference/runtime/host-main.cjs#L453439-L453445) | `ArrowFunctionExpression` | no | `path33, event, errorClass, line` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453439-453445](../../../../../reference/runtime/host-main.cjs#L453439-L453445) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:453439

Calls written directly in this body: `JSON.stringify`, `log5`, `report`, `seen.add`, `seen.has`.

SHA-256 of the source span: `cefefc5baa5ff1b6f6e23e81681b5f6eb09e627acabf879acbac1abe1440e6f3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
