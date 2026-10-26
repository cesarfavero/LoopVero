# `RosterProjection.countAgentsOnDisk`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/roster-projection.ts` · [Module README](../../../../../../modules/host/extensions/transcript/roster-projection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739232-739234](../../../../../../../reference/runtime/host-main.cjs#L739232-L739234) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739232-739234](../../../../../../../reference/runtime/host-main.cjs#L739232-L739234) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:739232

Calls written directly in this body: `this.tm.sessionStore.listAgents`.

SHA-256 of the source span: `822240298c8cde13f0019cf2f5e3fb130aaa41b225879f6f6cc1a8f4ec46b255`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
