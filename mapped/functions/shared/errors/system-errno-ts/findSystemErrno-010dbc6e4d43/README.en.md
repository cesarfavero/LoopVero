# `findSystemErrno`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/errors/system-errno.ts` · [Module README](../../../../../modules/shared/errors/system-errno-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784-786](../../../../../../reference/runtime/host-main.cjs#L784-L786) | `FunctionDeclaration` | no | `error64` |
| [evaluation:474675-474677](../../../../../../reference/runtime/sand-eval-runner.cjs#L474675-L474677) | `FunctionDeclaration` | no | `error63` |
| [state-worker:353-355](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L353-L355) | `FunctionDeclaration` | no | `error` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784-786](../../../../../../reference/runtime/host-main.cjs#L784-L786) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:474675-474677](../../../../../../reference/runtime/sand-eval-runner.cjs#L474675-L474677) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:353-355](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L353-L355) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:784

Calls written directly in this body: `findErrorCode`.

SHA-256 of the source span: `72b16f719f3fce60d510f1bcf94a76b8a97229dfb228ec5d8686e3193035ec86`.

### evaluation:474675

Calls written directly in this body: `findErrorCode`.

SHA-256 of the source span: `ae23a0c3e56b3bb9530062c1cda4591dad28a5d448c05ba34ba4433cadbb3d40`.

### state-worker:353

Calls written directly in this body: `findErrorCode`.

SHA-256 of the source span: `15504ce1a354c5ae44332b06b60005b812589bba7dc41aa6d430fc25e4b09b5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
