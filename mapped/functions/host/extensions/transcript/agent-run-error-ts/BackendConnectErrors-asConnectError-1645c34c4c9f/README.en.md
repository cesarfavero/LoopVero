# `_BackendConnectErrors.asConnectError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-run-error.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-run-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736699-736702](../../../../../../../reference/runtime/host-main.cjs#L736699-L736702) | `method` | no | `candidate` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736699-736702](../../../../../../../reference/runtime/host-main.cjs#L736699-L736702) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:736699

Calls written directly in this body: `_BackendConnectErrors.hasConnectErrorShape`.

SHA-256 of the source span: `242e42a2228d0028b4f6bddeebc74838d9674c490baafcc178348c7c28e5615b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
