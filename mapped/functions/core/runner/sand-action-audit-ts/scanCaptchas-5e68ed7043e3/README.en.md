# `scanCaptchas`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512581-512624](../../../../../../reference/runtime/sand-eval-runner.cjs#L512581-L512624) | `FunctionDeclaration` | yes | `ctx, remoteAccessor, displayNumber, pages, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512581-512624](../../../../../../reference/runtime/sand-eval-runner.cjs#L512581-L512624) | 5 | 0 | 2 | 5 | 0 | 1 |

### evaluation:512581

Calls written directly in this body: `.execute`, `.map`, `captchaScanCommand`, `captchaScanFailures.increment`, `deps.buildShellArgs`, `deps.ensureBrowserDriver`, `errorLogTag`, `new Map`, `pages.slice`, `parseCaptchaScanResult`, `process.stderr.write`, `remoteAccessor.get`.

SHA-256 of the source span: `b91fc35978e8ff219bfa6bfc18456ab22f724f26880e1890409342afd013f4e3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
