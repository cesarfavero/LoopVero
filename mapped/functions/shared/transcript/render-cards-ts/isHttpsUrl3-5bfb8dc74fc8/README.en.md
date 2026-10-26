# `isHttpsUrl3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/render-cards.ts` · [Module README](../../../../../modules/shared/transcript/render-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707808-707810](../../../../../../reference/runtime/host-main.cjs#L707808-L707810) | `FunctionDeclaration` | no | `value` |
| [evaluation:564295-564297](../../../../../../reference/runtime/sand-eval-runner.cjs#L564295-L564297) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707808-707810](../../../../../../reference/runtime/host-main.cjs#L707808-L707810) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564295-564297](../../../../../../reference/runtime/sand-eval-runner.cjs#L564295-L564297) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:707808

Calls written directly in this body: `URL.canParse`, `new URL`.

SHA-256 of the source span: `d8111665e69279304070dd3084a4cfb71b0396f7c98d1327a3a05cfcdbaaf0bc`.

### evaluation:564295

Calls written directly in this body: `URL.canParse`, `new URL`.

SHA-256 of the source span: `d8111665e69279304070dd3084a4cfb71b0396f7c98d1327a3a05cfcdbaaf0bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
