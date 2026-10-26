# `SandSessionMaterialization.runMint`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-materialization.ts` · [Module README](../../../../../../modules/host/extensions/session/session-materialization-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721434-721448](../../../../../../../reference/runtime/host-main.cjs#L721434-L721448) | `method` | yes | `agentId, mint2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721434-721448](../../../../../../../reference/runtime/host-main.cjs#L721434-L721448) | 0 | 0 | 2 | 1 | 1 | 1 |

### host:721434

Calls written directly in this body: `.catch`, `mint2`, `removeSandDataTree`, `this.host.getAgentDir`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `126c4b6515977fa995d68ab56116bf7e39768450ce3a08782e40bc82ec42ea6b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
