# `driverUnavailableFillResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727434-727443](../../../../../../../reference/runtime/host-main.cjs#L727434-L727443) | `FunctionDeclaration` | no | `values, submitAfterFill` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727434-727443](../../../../../../../reference/runtime/host-main.cjs#L727434-L727443) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:727434

Calls written directly in this body: `.map`, `Object.fromEntries`, `Object.keys`, `failAllFills`, `values.filter`.

SHA-256 of the source span: `1a2119f26028e20f1fc5d2f960fc867cc49014146850e5c14e5ca1a9374a9d9d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
