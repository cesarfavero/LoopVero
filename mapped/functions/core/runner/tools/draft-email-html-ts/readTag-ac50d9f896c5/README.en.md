# `readTag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-email-html.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732535-732545](../../../../../../../reference/runtime/host-main.cjs#L732535-L732545) | `FunctionDeclaration` | no | `reading, tag` |
| [evaluation:539547-539557](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539547-L539557) | `FunctionDeclaration` | no | `reading, tag` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732535-732545](../../../../../../../reference/runtime/host-main.cjs#L732535-L732545) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:539547-539557](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539547-L539557) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:732535

Calls written directly in this body: `.replace`, `closeLink`, `decodeEntities`, `tag.attributes.get`.

Assignment or increment targets: `reading.link`.

SHA-256 of the source span: `beda02b190b6380876e381fe929098a725c811fbdaecb3ed67c946da1cfab83c`.

### evaluation:539547

Calls written directly in this body: `.replace`, `closeLink`, `decodeEntities`, `tag.attributes.get`.

Assignment or increment targets: `reading.link`.

SHA-256 of the source span: `beda02b190b6380876e381fe929098a725c811fbdaecb3ed67c946da1cfab83c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
