# `RosterProjection.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/roster-projection.ts` · [Module README](../../../../../../modules/host/extensions/transcript/roster-projection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739204-739210](../../../../../../../reference/runtime/host-main.cjs#L739204-L739210) | `method` | no | `tm` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739204-739210](../../../../../../../reference/runtime/host-main.cjs#L739204-L739210) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:739204

Calls written directly in this body: `new ProfileWatch`, `new RosterEmit`, `new RosterSearch`.

Assignment or increment targets: `this.lastKnownAgentNames`, `this.profileWatch`, `this.rosterEmit`, `this.search`, `this.tm`.

SHA-256 of the source span: `005a752561c4f1ad0a037ecdb879e9c24dc35ee409eb960d70359797082ac925`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
