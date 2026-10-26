# `getAgentProfileText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-profile-files.ts` · [Module README](../../../../../../modules/host/extensions/session/session-profile-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722804-722814](../../../../../../../reference/runtime/host-main.cjs#L722804-L722814) | `FunctionDeclaration` | no | `host, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722804-722814](../../../../../../../reference/runtime/host-main.cjs#L722804-L722814) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:722804

Calls written directly in this body: `getSandProfilePath`, `host.getAgentDir`, `readSandProfileFile`.

SHA-256 of the source span: `041d7af91954139110dbc72d1f4bd32cefab26945fb96ac4bf3f1e3797a927b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
