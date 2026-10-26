# `infoRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-info-read.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-info-read-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508388-508394](../../../../../../../reference/runtime/host-main.cjs#L508388-L508394) | `FunctionDeclaration` | no | `bcId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508388-508394](../../../../../../../reference/runtime/host-main.cjs#L508388-L508394) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:508388

Calls written directly in this body: `new GetBackgroundComposerInfoRequest`.

SHA-256 of the source span: `c097e0e7a3cd4e8363e5d2ef1288fe06d9e384bf385911d1288fde0380af804c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
