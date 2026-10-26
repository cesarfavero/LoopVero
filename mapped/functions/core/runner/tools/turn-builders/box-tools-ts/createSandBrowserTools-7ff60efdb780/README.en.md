# `createSandBrowserTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/box-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778908-778937](../../../../../../../../reference/runtime/host-main.cjs#L778908-L778937) | `FunctionDeclaration` | no | `{   host,   decisions,   turn,   props,   resolveAgentDisplay,   extractAutoReviewConversationContext: extractAutoReviewConversationContext3 }` |
| [evaluation:578642-578671](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578642-L578671) | `FunctionDeclaration` | no | `{   host,   decisions,   turn,   props,   resolveAgentDisplay,   extractAutoReviewConversationContext: extractAutoReviewConversationContext3 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778908-778937](../../../../../../../../reference/runtime/host-main.cjs#L778908-L778937) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:578642-578671](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578642-L578671) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:778908

Calls written directly in this body: `.map`, `SAND_BROWSER_TOOL_SETS[computed].createTools`, `boxBrowserWindowDeps`, `browserAutoReviewConfig`, `playwrightRunCodeToolDeps`, `resolveSandBrowserSurface`, `sandBrowserArmDeps`, `secureValueGuardForHost`.

SHA-256 of the source span: `5941f74ff7f5e48cb93241e8a7cc1d5c4ad15b474822e493145891565232ce1f`.

### evaluation:578642

Calls written directly in this body: `.map`, `SAND_BROWSER_TOOL_SETS[computed].createTools`, `boxBrowserWindowDeps`, `browserAutoReviewConfig`, `playwrightRunCodeToolDeps`, `resolveSandBrowserSurface`, `sandBrowserArmDeps`, `secureValueGuardForHost`.

SHA-256 of the source span: `5941f74ff7f5e48cb93241e8a7cc1d5c4ad15b474822e493145891565232ce1f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
