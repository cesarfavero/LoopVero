# `markdownLink`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/slack-markup.ts` · [Module README](../../../../../modules/shared/channels/slack-markup-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721612-721617](../../../../../../reference/runtime/host-main.cjs#L721612-L721617) | `FunctionDeclaration` | no | `url2, label` |
| [evaluation:539864-539869](../../../../../../reference/runtime/sand-eval-runner.cjs#L539864-L539869) | `FunctionDeclaration` | no | `url2, label` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721612-721617](../../../../../../reference/runtime/host-main.cjs#L721612-L721617) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:539864-539869](../../../../../../reference/runtime/sand-eval-runner.cjs#L539864-L539869) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:721612

Calls written directly in this body: `.replaceAll`, `label.trim`, `nonEmpty`, `text3.replace`, `url2.replaceAll`.

SHA-256 of the source span: `48b100ecb33e003eec3e93a500f5011b3e9a7f555608894e5eb12f223646ffbb`.

### evaluation:539864

Calls written directly in this body: `.replaceAll`, `label.trim`, `nonEmpty`, `text3.replace`, `url2.replaceAll`.

SHA-256 of the source span: `48b100ecb33e003eec3e93a500f5011b3e9a7f555608894e5eb12f223646ffbb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
