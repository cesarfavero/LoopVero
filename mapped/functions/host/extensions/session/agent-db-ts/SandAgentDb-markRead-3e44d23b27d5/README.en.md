# `SandAgentDb.markRead`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718567-718580](../../../../../../../reference/runtime/host-main.cjs#L718567-L718580) | `method` | no | `at3 = Date.now()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718567-718580](../../../../../../../reference/runtime/host-main.cjs#L718567-L718580) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:718567

Calls written directly in this body: `this.updateUnreadState`.

SHA-256 of the source span: `4e0cd7523a20ab77f272d3a3fcebab7cdf96afd735228c83709ddf638c22a325`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
