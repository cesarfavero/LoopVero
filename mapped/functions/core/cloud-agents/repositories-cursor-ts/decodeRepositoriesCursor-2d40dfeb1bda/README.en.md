# `decodeRepositoriesCursor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/repositories-cursor.ts` · [Module README](../../../../../modules/core/cloud-agents/repositories-cursor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512453-512483](../../../../../../reference/runtime/host-main.cjs#L512453-L512483) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512453-512483](../../../../../../reference/runtime/host-main.cjs#L512453-L512483) | 3 | 0 | 0 | 2 | 2 | 1 |

### host:512453

Calls written directly in this body: `.toString`, `Buffer.from`, `JSON.parse`, `decodeOriginWalk`, `new SandCloudAgentRepositoriesCursorError`, `repositoriesCursorWire.parse`, `wire.units.map`.

Assignment or increment targets: `wire`.

Explicit throw targets: `SandCloudAgentRepositoriesCursorError`.

SHA-256 of the source span: `126bbf5b55bed1de3d79064ac003a92e352561d1fbec4b1e3dec80e366ffa5eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
