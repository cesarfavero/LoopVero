# `statIfExists`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-paths.ts` · [Module README](../../../../../../modules/host/extensions/session/session-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718236-718250](../../../../../../../reference/runtime/host-main.cjs#L718236-L718250) | `FunctionDeclaration` | yes | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718236-718250](../../../../../../../reference/runtime/host-main.cjs#L718236-L718250) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:718236

Calls written directly in this body: `errorLogTag`, `reportSessionDiagnostic`.

SHA-256 of the source span: `21b004a112dcca953e9573e7daf2e6798de6bab3ccf6ca58973c7b2e46b846ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
