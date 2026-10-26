# `WidgetResponses.routeSecret`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783057-783084](../../../../../../../reference/runtime/host-main.cjs#L783057-L783084) | `method` | yes | `agentId, target, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783057-783084](../../../../../../../reference/runtime/host-main.cjs#L783057-L783084) | 4 | 0 | 0 | 4 | 0 | 1 |

### host:783057

Calls written directly in this body: `errorLogTag`, `reportHostDiagnostic`, `this.tm.sessionStore.storeConnectorCredential`, `this.tm.storeBoxSecret`.

Assignment or increment targets: `stored`.

SHA-256 of the source span: `0ae555964c3a67cd08ce53a6473e73ad08f25cfb7a2520a6f09fdae814fcaaf9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
