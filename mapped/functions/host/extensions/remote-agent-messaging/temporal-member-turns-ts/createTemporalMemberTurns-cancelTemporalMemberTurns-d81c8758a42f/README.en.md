# `createTemporalMemberTurns/cancelTemporalMemberTurns`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/remote-agent-messaging/temporal-member-turns.ts` · [Module README](../../../../../../modules/host/extensions/remote-agent-messaging/temporal-member-turns-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708431-708437](../../../../../../../reference/runtime/host-main.cjs#L708431-L708437) | `FunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708431-708437](../../../../../../../reference/runtime/host-main.cjs#L708431-L708437) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:708431

Calls written directly in this body: `cancelUpstream`, `settle3`.

SHA-256 of the source span: `9735fbe2e68302d0b23c7395de0733da161fd272b2613cb6de69cd5335ed2625`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
