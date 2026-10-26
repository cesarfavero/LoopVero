# `closeLink`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-email-html.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732546-732558](../../../../../../../reference/runtime/host-main.cjs#L732546-L732558) | `FunctionDeclaration` | no | `reading` |
| [evaluation:539558-539570](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539558-L539570) | `FunctionDeclaration` | no | `reading` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732546-732558](../../../../../../../reference/runtime/host-main.cjs#L732546-L732558) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539558-539570](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539558-L539570) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:732546

Calls written directly in this body: `LINK_LIKE_TEXT.test`, `reading.targets.push`, `reading.words.push`, `reading.words.slice`, `sameWords`, `showsTarget`, `wordsOf3`.

Assignment or increment targets: `reading.link`, `reading.misleadingLink`.

SHA-256 of the source span: `880614130abb9203015773b22d361d6128375c77949ced9f24df12f5e1e377ba`.

### evaluation:539558

Calls written directly in this body: `LINK_LIKE_TEXT.test`, `reading.targets.push`, `reading.words.push`, `reading.words.slice`, `sameWords`, `showsTarget`, `wordsOf2`.

Assignment or increment targets: `reading.link`, `reading.misleadingLink`.

SHA-256 of the source span: `87ca050c25e5ddaeb7849660162b5df4281e4eb56c4821e752e607f1719f7191`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
