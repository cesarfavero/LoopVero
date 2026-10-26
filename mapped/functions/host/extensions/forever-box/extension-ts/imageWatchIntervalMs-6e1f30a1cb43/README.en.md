# `imageWatchIntervalMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/extension.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681125-681128](../../../../../../../reference/runtime/host-main.cjs#L681125-L681128) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681125-681128](../../../../../../../reference/runtime/host-main.cjs#L681125-L681128) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:681125

Calls written directly in this body: `Number.isInteger`, `Number.parseInt`.

SHA-256 of the source span: `4a049e0822f0ae653b1900359323f17e0b89689cb0df401013c812d3db6b60f3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
