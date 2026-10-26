# `SandHost.forgetDroppedAgents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-host.ts` · [Module README](../../../../modules/host/sand-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786788-786799](../../../../../reference/runtime/host-main.cjs#L786788-L786799) | `method` | yes | `agentIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786788-786799](../../../../../reference/runtime/host-main.cjs#L786788-L786799) | 0 | 1 | 1 | 0 | 0 | 0 |

### host:786788

Calls written directly in this body: `.catch`, `forgetDeletedAgentsOnHost`, `this.requireHostExtensions`.

SHA-256 of the source span: `95df2bda4224da3687945ea0df2fac8e21e7b6f09548d3f73ae10e816790d4ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
