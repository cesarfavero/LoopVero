# `sandDataRelativeTail`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/host-paths.ts` · [Module README](../../../../modules/core/host-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430916-430923](../../../../../reference/runtime/host-main.cjs#L430916-L430923) | `FunctionDeclaration` | no | `storedPath, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430916-430923](../../../../../reference/runtime/host-main.cjs#L430916-L430923) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:430916

Calls written directly in this body: `/(?:[/\\]\.cursor[/\\]sand(?:-[^/\\]+)?|[/\\]\.grokbot)[/\\](.+)$/.exec`, `isPathWithin`.

SHA-256 of the source span: `1a5b4ab235fd8c36eb02dfcb75dae222c6415eaa47cd75bd416411153bbe2c79`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
