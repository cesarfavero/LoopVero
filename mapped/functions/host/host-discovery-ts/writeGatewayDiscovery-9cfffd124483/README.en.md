# `writeGatewayDiscovery`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-discovery.ts` · [Module README](../../../../modules/host/host-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493995-494014](../../../../../reference/runtime/host-main.cjs#L493995-L494014) | `FunctionDeclaration` | yes | `info2, path33 = getGatewayDiscoveryPath(), fs33 = import_node_fs34.promises` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493995-494014](../../../../../reference/runtime/host-main.cjs#L493995-L494014) | 4 | 0 | 3 | 1 | 1 | 2 |

### host:493995

Calls written directly in this body: `.isSymbolicLink`, `JSON.stringify`, `fs33.lstat`, `fs33.unlink`, `isMissingPathError`, `reportFallback`, `writeFileAtomic`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `a8aac69f7d850251d7acd354086748547c6d100512b55f2e397ed9576d5c303a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
