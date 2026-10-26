# `cardTextProblems`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/card-text.ts` · [Module README](../../../../../modules/shared/transcript/card-text-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706906-706934](../../../../../../reference/runtime/host-main.cjs#L706906-L706934) | `FunctionDeclaration` | no | `path33, text3, rule` |
| [evaluation:481003-481031](../../../../../../reference/runtime/sand-eval-runner.cjs#L481003-L481031) | `FunctionDeclaration` | no | `path33, text3, rule` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706906-706934](../../../../../../reference/runtime/host-main.cjs#L706906-L706934) | 9 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:481003-481031](../../../../../../reference/runtime/sand-eval-runner.cjs#L481003-L481031) | 9 | 0 | 0 | 3 | 0 | 0 |

### host:706906

Calls written directly in this body: `Array.from`, `LINE_BREAKS.test`, `cardTextEntities`, `cardTextSite`, `codePoints`, `entities.join`, `hidden.join`, `new Set`, `problems.push`, `symbols.join`, `text3.matchAll`.

SHA-256 of the source span: `0219e07bd14193e48e65aaa47bf18e85bdd3817c52dfcb89e0689f069cbc380f`.

### evaluation:481003

Calls written directly in this body: `Array.from`, `LINE_BREAKS.test`, `cardTextEntities`, `cardTextSite`, `codePoints`, `entities.join`, `hidden.join`, `new Set`, `problems.push`, `symbols.join`, `text3.matchAll`.

SHA-256 of the source span: `0219e07bd14193e48e65aaa47bf18e85bdd3817c52dfcb89e0689f069cbc380f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
