# `WidgetResponses.storeSecret`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:782858-782868](../../../../../../../reference/runtime/host-main.cjs#L782858-L782868) | `method` | yes | `target, value, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782858-782868](../../../../../../../reference/runtime/host-main.cjs#L782858-L782868) | 3 | 0 | 1 | 4 | 0 | 0 |

### host:782858

Calls written directly in this body: `this.routeSecret`, `this.tm.sessions.ensureActionTarget`, `this.tm.storeBoxSecret`, `value.trim`.

SHA-256 of the source span: `52d19c89a8af480b830bf3961021a58bd2efe5ea2845545910e24d73547b268f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
