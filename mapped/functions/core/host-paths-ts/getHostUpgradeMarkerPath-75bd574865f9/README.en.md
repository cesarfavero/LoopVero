# `getHostUpgradeMarkerPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/host-paths.ts` · [Module README](../../../../modules/core/host-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430946-430948](../../../../../reference/runtime/host-main.cjs#L430946-L430948) | `FunctionDeclaration` | no | `homeDir = (0, import_node_os.homedir)()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430946-430948](../../../../../reference/runtime/host-main.cjs#L430946-L430948) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:430946

Calls written directly in this body: `getSandRootDir`.

SHA-256 of the source span: `834edb688040faf1266a3de5b5ff69c15ebfaae34e4ebe36b23bdc6b89fa71e8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
