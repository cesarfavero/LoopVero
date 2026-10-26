# `recoverAgentWithMissingDb`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-mutations.ts` · [Module README](../../../../../../modules/host/extensions/session/session-mutations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722762-722786](../../../../../../../reference/runtime/host-main.cjs#L722762-L722786) | `FunctionDeclaration` | yes | `host, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722762-722786](../../../../../../../reference/runtime/host-main.cjs#L722762-L722786) | 4 | 0 | 3 | 4 | 0 | 0 |

### host:722762

Calls written directly in this body: `agentHasDurableFootprint`, `buildSummary`, `getSandProfilePath`, `hasLiveSandAgentDbHandle`, `host.isAgentBeingDeleted`, `host.reseedMinimalStoreDbIfMissing`, `statIfExists`.

Assignment or increment targets: `dbStats`.

SHA-256 of the source span: `4ca8aa2b335e59c89c0c075e63017cfe4f14905a09d16057d12384c630289df9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
