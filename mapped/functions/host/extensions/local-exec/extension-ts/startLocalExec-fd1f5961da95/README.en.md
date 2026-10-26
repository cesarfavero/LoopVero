# `startLocalExec`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/local-exec/extension.ts` · [Module README](../../../../../../modules/host/extensions/local-exec/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682173-682187](../../../../../../../reference/runtime/host-main.cjs#L682173-L682187) | `FunctionDeclaration` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682173-682187](../../../../../../../reference/runtime/host-main.cjs#L682173-L682187) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682173

Calls written directly in this body: `new SandLocalExecBridge`.

SHA-256 of the source span: `8752ec9e7f625ab42cecf9dd6813ee8b0249f1844cf9d9117fbe830e575c6c60`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
