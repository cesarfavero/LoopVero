# `fieldValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-gc.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-gc-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:22192-22201](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22192-L22201) | `FunctionDeclaration` | no | `message, field` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22192-22201](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22192-L22201) | 3 | 0 | 0 | 4 | 0 | 0 |

### state-worker:22192

Calls written directly in this body: `isUnknownRecord`.

SHA-256 of the source span: `8303283b036942791f5910e8062fd54f773fb6a7297e689a4c0cca6cf186fa9d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
