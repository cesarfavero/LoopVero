# `publishAppDecisionOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512507-512509](../../../../../../reference/runtime/host-main.cjs#L512507-L512509) | `FunctionDeclaration` | no | `wire` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512507-512509](../../../../../../reference/runtime/host-main.cjs#L512507-L512509) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:512507

Calls written directly in this body: `SAND_CLOUD_AGENT_PUBLISH_APP_DECISIONS.find`.

SHA-256 of the source span: `72a5bc5f7e5d62cec59528ebf7d27a8194de772b7e58c8da8a141ac83042aa4f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
