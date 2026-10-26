# `findBackendConnectError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-run-error.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-run-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736747-736752](../../../../../../../reference/runtime/host-main.cjs#L736747-L736752) | `FunctionDeclaration` | no | `error64, requireDetails = true` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736747-736752](../../../../../../../reference/runtime/host-main.cjs#L736747-L736752) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:736747

Calls written directly in this body: `BackendConnectErrors.scan`.

SHA-256 of the source span: `0a849b206069845436f7fd71cf7073aa978160efe93d6e097255627c42eb80ec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
