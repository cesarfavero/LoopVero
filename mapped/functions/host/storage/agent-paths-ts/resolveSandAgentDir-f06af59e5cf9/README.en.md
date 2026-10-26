# `resolveSandAgentDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/agent-paths.ts` · [Module README](../../../../../modules/host/storage/agent-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494903-494912](../../../../../../reference/runtime/host-main.cjs#L494903-L494912) | `FunctionDeclaration` | no | `agentId, homeDir = (0, import_node_os9.homedir)()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494903-494912](../../../../../../reference/runtime/host-main.cjs#L494903-L494912) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:494903

Calls written directly in this body: `assertValidSandAgentId`, `getSandAgentsRootDir`, `new SandInvalidAgentIdError`, `rel.includes`, `rel.startsWith`.

Explicit throw targets: `SandInvalidAgentIdError`.

SHA-256 of the source span: `6f6e490b0b89eb0d89f09f10afb37ddff96379e726c2ce2aeb37ed88664cde11`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
