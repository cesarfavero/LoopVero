# `WidgetResponses.cancelCredentialRequestExpiry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:782475-782479](../../../../../../../reference/runtime/host-main.cjs#L782475-L782479) | `method` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782475-782479](../../../../../../../reference/runtime/host-main.cjs#L782475-L782479) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:782475

Calls written directly in this body: `.dispose`, `JSON.stringify`, `this.credentialExpiryTimers.delete`, `this.credentialExpiryTimers.get`.

SHA-256 of the source span: `6fe2994d1661dba20ff983317018af881747f3d67302af2dffc5d41918022df9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
