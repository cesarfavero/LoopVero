# `assertValidSandAgentId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/agent-paths.ts` · [Module README](../../../../../modules/host/storage/agent-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494896-494902](../../../../../../reference/runtime/host-main.cjs#L494896-L494902) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494896-494902](../../../../../../reference/runtime/host-main.cjs#L494896-L494902) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:494896

Calls written directly in this body: `new SandInvalidAgentIdError`, `parseAgentId`.

Explicit throw targets: `SandInvalidAgentIdError`.

SHA-256 of the source span: `c8b1fdcb67787cb51362a38236d7a0bbe4bfc833c7ecd897a1cd56cc76dd0349`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
