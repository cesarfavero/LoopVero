# `writeJsonAtomic`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/managed-setup/managed-setup-service.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683895-683898](../../../../../../../reference/runtime/host-main.cjs#L683895-L683898) | `FunctionDeclaration` | yes | `path33, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683895-683898](../../../../../../../reference/runtime/host-main.cjs#L683895-L683898) | 0 | 0 | 2 | 0 | 0 | 0 |

### host:683895

Calls written directly in this body: `jsonFileContents`, `writeFileAtomic`.

SHA-256 of the source span: `d239307cab3d1cd79375118cb9e73d2497ea7241b0cb4fdebe21c621f45e9a36`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
