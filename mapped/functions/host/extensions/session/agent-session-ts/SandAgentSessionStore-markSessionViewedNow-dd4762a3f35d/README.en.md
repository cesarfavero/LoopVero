# `SandAgentSessionStore.markSessionViewedNow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723459-723461](../../../../../../../reference/runtime/host-main.cjs#L723459-L723461) | `method` | no | `session, at3 = Date.now(), options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723459-723461](../../../../../../../reference/runtime/host-main.cjs#L723459-L723461) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:723459

Calls written directly in this body: `session.db.markViewed`.

SHA-256 of the source span: `2b2ed2d7a632c39bedd9b1867d9eddcf1452f2e2a69a591e1af08ed6208e8a51`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
