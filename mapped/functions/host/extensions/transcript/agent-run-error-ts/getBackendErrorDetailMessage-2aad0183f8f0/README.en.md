# `getBackendErrorDetailMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-run-error.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-run-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736753-736766](../../../../../../../reference/runtime/host-main.cjs#L736753-L736766) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736753-736766](../../../../../../../reference/runtime/host-main.cjs#L736753-L736766) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:736753

Calls written directly in this body: `BackendConnectErrors.backendDetails`, `detail.detail.trim`, `detail.title.trim`, `findBackendConnectError`.

SHA-256 of the source span: `edf0fad4cdfd9f5fe7cad4b991de3bacf9dc6755ad6c9c07a830c6ae42bfee1e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
