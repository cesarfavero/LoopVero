# `getGatewayDiscoveryPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/host-paths.ts` · [Module README](../../../../modules/core/host-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430935-430937](../../../../../reference/runtime/host-main.cjs#L430935-L430937) | `FunctionDeclaration` | no | `homeDir = (0, import_node_os.homedir)()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430935-430937](../../../../../reference/runtime/host-main.cjs#L430935-L430937) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:430935

Calls written directly in this body: `getSandRootDir`.

SHA-256 of the source span: `ada7be2ca3badc88fd79d8efd9d0a0c85c80a13e7170575f63b34b8e8c87bd46`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
