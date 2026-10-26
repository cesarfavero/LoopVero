# `start/startHandoff`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/extension.ts` · [Module README](../../../../../../modules/host/extensions/transcript/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783723-783723](../../../../../../../reference/runtime/host-main.cjs#L783723-L783723) | `ArrowFunctionExpression` | no | `request5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783723-783723](../../../../../../../reference/runtime/host-main.cjs#L783723-L783723) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:783723 uses an implicit arrow-function return.

### host:783723

Calls written directly in this body: `context2.deps.session.startHandoff`.

SHA-256 of the source span: `39f59d9d95f9ccf43fbd55a6cee001ea235bd89f5075833d377ad6f26ec386fb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
