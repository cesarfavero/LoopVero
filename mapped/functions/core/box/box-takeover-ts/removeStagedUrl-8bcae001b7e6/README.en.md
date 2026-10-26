# `removeStagedUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-takeover.ts` · [Module README](../../../../../modules/core/box/box-takeover-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776076-776085](../../../../../../reference/runtime/host-main.cjs#L776076-L776085) | `FunctionDeclaration` | yes | `ctx, remove` |
| [evaluation:575733-575742](../../../../../../reference/runtime/sand-eval-runner.cjs#L575733-L575742) | `FunctionDeclaration` | yes | `ctx, remove` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776076-776085](../../../../../../reference/runtime/host-main.cjs#L776076-L776085) | 1 | 0 | 1 | 0 | 0 | 1 |
| [evaluation:575733-575742](../../../../../../reference/runtime/sand-eval-runner.cjs#L575733-L575742) | 1 | 0 | 1 | 0 | 0 | 1 |

### host:776076

Calls written directly in this body: `.withTimeoutAndCancel`, `ctx.withDetached`, `finish`, `remove`, `reportTakeoverFailure`, `succeeded`.

SHA-256 of the source span: `15aab828fce186f521f073464a05fd588fd6902a06b3049ec52972ae662b177a`.

### evaluation:575733

Calls written directly in this body: `.withTimeoutAndCancel`, `ctx.withDetached`, `finish`, `remove`, `reportTakeoverFailure`, `succeeded`.

SHA-256 of the source span: `15aab828fce186f521f073464a05fd588fd6902a06b3049ec52972ae662b177a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
