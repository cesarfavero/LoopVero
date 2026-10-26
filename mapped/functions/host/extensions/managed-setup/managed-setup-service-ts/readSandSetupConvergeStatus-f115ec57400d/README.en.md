# `readSandSetupConvergeStatus`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/managed-setup/managed-setup-service.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683794-683809](../../../../../../../reference/runtime/host-main.cjs#L683794-L683809) | `FunctionDeclaration` | yes | `runAs, statusPath = SAND_SETUP_STATUS_PATH` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683794-683809](../../../../../../../reference/runtime/host-main.cjs#L683794-L683809) | 2 | 0 | 4 | 3 | 0 | 0 |

### host:683794

Calls written directly in this body: `Buffer.alloc`, `buffer.toString`, `handle.close`, `handle.read`, `handle.stat`, `info2.isFile`, `parseSandSetupConvergeStatus`.

SHA-256 of the source span: `eebcceab1a8953abe7d997789541d0fe7c3c6b1a7fa93402fc06d33a107adefc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
