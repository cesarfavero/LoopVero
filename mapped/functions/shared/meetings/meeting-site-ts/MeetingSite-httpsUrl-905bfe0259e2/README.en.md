# `_MeetingSite.httpsUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-site.ts` · [Module README](../../../../../modules/shared/meetings/meeting-site-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772244-772250](../../../../../../reference/runtime/host-main.cjs#L772244-L772250) | `method` | no | `trimmed` |
| [evaluation:571473-571479](../../../../../../reference/runtime/sand-eval-runner.cjs#L571473-L571479) | `method` | no | `trimmed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772244-772250](../../../../../../reference/runtime/host-main.cjs#L772244-L772250) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:571473-571479](../../../../../../reference/runtime/sand-eval-runner.cjs#L571473-L571479) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:772244

Calls written directly in this body: `URL.canParse`, `_MeetingSite.hasScheme.test`, `new URL`.

SHA-256 of the source span: `a27f971083f3eed924727c5eab79d6fa0a25dd3c8f0e3cb4ef800afd7202bd3d`.

### evaluation:571473

Calls written directly in this body: `URL.canParse`, `_MeetingSite.hasScheme.test`, `new URL`.

SHA-256 of the source span: `ee51fdb61b6b5b2a7d58a1f2cc5c14492dcd9546c0b8a2fc2609cff1c8c3117e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
