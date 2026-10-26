# `reviewAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750557-750564](../../../../../../../reference/runtime/host-main.cjs#L750557-L750564) | `FunctionDeclaration` | no | `name18, args, viewId` |
| [evaluation:523408-523415](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523408-L523415) | `FunctionDeclaration` | no | `name18, args, viewId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750557-750564](../../../../../../../reference/runtime/host-main.cjs#L750557-L750564) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:523408-523415](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523408-L523415) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:750557

Calls written directly in this body: `.map`, `Object.entries`, `Object.fromEntries`, `toBrowserReviewAction`.

SHA-256 of the source span: `62c9bfe16bba646abfd0d16b37f46afb6b89095d88477018f606893fac4a6269`.

### evaluation:523408

Calls written directly in this body: `.map`, `Object.entries`, `Object.fromEntries`, `toBrowserReviewAction`.

SHA-256 of the source span: `62c9bfe16bba646abfd0d16b37f46afb6b89095d88477018f606893fac4a6269`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
