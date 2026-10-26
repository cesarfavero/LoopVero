# `createPlaywrightBrowserTools/postActionWait`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751455-751459](../../../../../../../reference/runtime/host-main.cjs#L751455-L751459) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:524306-524310](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524306-L524310) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751455-751459](../../../../../../../reference/runtime/host-main.cjs#L751455-L751459) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524306-524310](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524306-L524310) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:751455

Calls written directly in this body: `deps.playwrightPostActionWaitArm`.

Assignment or increment targets: `postActionWaitExposed`.

SHA-256 of the source span: `b844755888995e14477c59b9d80015c58d44834cbc68040b4a194c4918c58484`.

### evaluation:524306

Calls written directly in this body: `deps.playwrightPostActionWaitArm`.

Assignment or increment targets: `postActionWaitExposed`.

SHA-256 of the source span: `b844755888995e14477c59b9d80015c58d44834cbc68040b4a194c4918c58484`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
