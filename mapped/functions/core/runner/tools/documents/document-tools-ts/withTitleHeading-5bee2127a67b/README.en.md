# `withTitleHeading`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/documents/document-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/documents/document-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776418-776428](../../../../../../../../reference/runtime/host-main.cjs#L776418-L776428) | `FunctionDeclaration` | no | `title, markdown` |
| [evaluation:576069-576079](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576069-L576079) | `FunctionDeclaration` | no | `title, markdown` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776418-776428](../../../../../../../../reference/runtime/host-main.cjs#L776418-L776428) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:576069-576079](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576069-L576079) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:776418

Calls written directly in this body: `/^#\s+/.test`, `lines2.findIndex`, `lines2.join`, `markdown.replace`, `markdown.split`.

Assignment or increment targets: `lines2[computed]`.

SHA-256 of the source span: `89006de384305ad19a488464e9070db2c1ee2f60cb3262e2d41b94cc789266bd`.

### evaluation:576069

Calls written directly in this body: `/^#\s+/.test`, `lines2.findIndex`, `lines2.join`, `markdown.replace`, `markdown.split`.

Assignment or increment targets: `lines2[computed]`.

SHA-256 of the source span: `89006de384305ad19a488464e9070db2c1ee2f60cb3262e2d41b94cc789266bd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
