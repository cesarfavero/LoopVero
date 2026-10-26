# `handPathToAgentUser`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-user-handover.ts` · [Module README](../../../../modules/host/agent-user-handover-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494827-494834](../../../../../reference/runtime/host-main.cjs#L494827-L494834) | `FunctionDeclaration` | yes | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494827-494834](../../../../../reference/runtime/host-main.cjs#L494827-L494834) | 3 | 0 | 2 | 2 | 0 | 0 |

### host:494827

Calls written directly in this body: `chownSandDataEntrySync`, `isSandDataPath`, `process.getuid`.

SHA-256 of the source span: `a4c05c22d4a2a7ae18aa7ec57e057a1729f3124855b853d604f4ec8b146c5e19`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
