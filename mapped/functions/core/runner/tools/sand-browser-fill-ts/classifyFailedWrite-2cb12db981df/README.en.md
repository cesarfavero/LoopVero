# `classifyFailedWrite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727213-727219](../../../../../../../reference/runtime/host-main.cjs#L727213-L727219) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727213-727219](../../../../../../../reference/runtime/host-main.cjs#L727213-L727219) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:727213

Calls written directly in this body: `isFrameOriginDriverError`, `isHiddenTargetDriverError`, `isStaleRefDriverError`.

SHA-256 of the source span: `244f2a58e3d0bbb7413ac0be25930baef477182fc3110f2fb890da915e1a08cd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
