# `start/recordResolution`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/extension.ts` · [Module README](../../../../../../modules/host/extensions/transcript/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783719-783719](../../../../../../../reference/runtime/host-main.cjs#L783719-L783719) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783719-783719](../../../../../../../reference/runtime/host-main.cjs#L783719-L783719) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:783719 uses an implicit arrow-function return.

### host:783719

Calls written directly in this body: `context2.deps.session.recordUserFormResolution`.

SHA-256 of the source span: `738b4eda5720acc792171b5d7347fda80e4c127042ba8abd8c7c4b7b23fbdb6e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
