# `getSandAgentsRootDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/agent-paths.ts` · [Module README](../../../../../modules/host/storage/agent-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494893-494895](../../../../../../reference/runtime/host-main.cjs#L494893-L494895) | `FunctionDeclaration` | no | `homeDir = (0, import_node_os9.homedir)()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494893-494895](../../../../../../reference/runtime/host-main.cjs#L494893-L494895) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494893

Calls written directly in this body: `getSandRootDir`.

SHA-256 of the source span: `83a9c068e06408dbca40adad8d7191003cd98ee9ab0e48324b91cd97f94514c9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
