# `createSandNavigationProbe/runProbe`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512680-512764](../../../../../../reference/runtime/sand-eval-runner.cjs#L512680-L512764) | `ArrowFunctionExpression` | yes | `ctx, remoteAccessor, displayNumber, mode, generation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512680-512764](../../../../../../reference/runtime/sand-eval-runner.cjs#L512680-L512764) | 16 | 2 | 2 | 4 | 0 | 0 |

### evaluation:512680

Calls written directly in this body: `.includes`, `Number.isInteger`, `Promise.all`, `captcha.observePages`, `captcha.scanEmbedded`, `ctx.get`, `deps.auditor.record`, `deps.buildShellArgs`, `deps.getBoxId`, `navigationAuditProbeCommand`, `navigationPagesOf`, `nextNavigationObservation`, `now`, `observationByPageId.get`, `observationByPageId.set`, `pages.flatMap`, `pages.map`, `parseBrowserIdentity`, `probeBotBlockText`, `remoteAccessor.get`, `scanCaptchas`, `shell.execute`, `stdout.split`, `verdicts.get`.

SHA-256 of the source span: `3698f99a7868e2b36c52f6e7d74746de067aa4f3bb1f67392d620234bf39a260`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
