# `probeBotBlockText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512547-512575](../../../../../../reference/runtime/sand-eval-runner.cjs#L512547-L512575) | `FunctionDeclaration` | yes | `ctx, remoteAccessor, displayNumber, targets, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512547-512575](../../../../../../reference/runtime/sand-eval-runner.cjs#L512547-L512575) | 2 | 0 | 2 | 4 | 0 | 1 |

### evaluation:512547

Calls written directly in this body: `.execute`, `botBlockTextProbeCommand`, `deps.buildShellArgs`, `deps.ensureBrowserDriver`, `errorLogTag`, `new Map`, `parseBotBlockTextProbeResult`, `process.stderr.write`, `remoteAccessor.get`, `targets.slice`.

SHA-256 of the source span: `4456cdde5a7e19acf2ca8773e0ff52f379a54b6bbf5f6960e773f1bb99c97f1a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
