# `getHostLockPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/host-paths.ts` · [Module README](../../../../modules/core/host-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430938-430940](../../../../../reference/runtime/host-main.cjs#L430938-L430940) | `FunctionDeclaration` | no | `homeDir = (0, import_node_os.homedir)()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430938-430940](../../../../../reference/runtime/host-main.cjs#L430938-L430940) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:430938

Calls written directly in this body: `getSandRootDir`.

SHA-256 of the source span: `ece4cd7909403d83650e89f6cff118e587f18f82fed304d7c7ffaa0c0cda6261`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
