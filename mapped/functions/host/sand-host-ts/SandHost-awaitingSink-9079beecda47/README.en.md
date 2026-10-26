# `SandHost.awaitingSink`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-host.ts` · [Module README](../../../../modules/host/sand-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786690-786692](../../../../../reference/runtime/host-main.cjs#L786690-L786692) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786690-786692](../../../../../reference/runtime/host-main.cjs#L786690-L786692) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:786690

Calls written directly in this body: `this.transcript.createAwaitingStateSink`.

SHA-256 of the source span: `e6e088f4ce7b77edd988fe73aa955382e5087a94854ffe3dd2a52ea7e4786280`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
