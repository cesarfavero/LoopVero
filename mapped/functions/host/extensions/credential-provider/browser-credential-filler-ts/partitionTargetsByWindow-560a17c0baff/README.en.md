# `partitionTargetsByWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547147-547152](../../../../../../../reference/runtime/host-main.cjs#L547147-L547152) | `FunctionDeclaration` | no | `targets, windowIndex` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547147-547152](../../../../../../../reference/runtime/host-main.cjs#L547147-L547152) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:547147

Calls written directly in this body: `targets.filter`.

SHA-256 of the source span: `199754d72aa014eb8e7c5de3be1373656e4b689df49f48acfc99c4271146ee93`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
