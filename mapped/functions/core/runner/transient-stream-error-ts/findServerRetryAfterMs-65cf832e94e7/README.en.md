# `findServerRetryAfterMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736420-736444](../../../../../../reference/runtime/host-main.cjs#L736420-L736444) | `FunctionDeclaration` | no | `error64, seen` |
| [evaluation:590092-590116](../../../../../../reference/runtime/sand-eval-runner.cjs#L590092-L590116) | `FunctionDeclaration` | no | `error63, seen` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736420-736444](../../../../../../reference/runtime/host-main.cjs#L736420-L736444) | 7 | 1 | 0 | 5 | 0 | 0 |
| [evaluation:590092-590116](../../../../../../reference/runtime/sand-eval-runner.cjs#L590092-L590116) | 7 | 1 | 0 | 5 | 0 | 0 |

### host:736420

Calls written directly in this body: `Array.isArray`, `Math.min`, `Math.round`, `Number`, `Number.isFinite`, `error64.metadata.get`, `findServerRetryAfterMs`, `seen.add`, `seen.has`.

SHA-256 of the source span: `3eb3f22cf0027d71b19f12895307f4c91c194085ef2cb6a485b18af06a1f8b19`.

### evaluation:590092

Calls written directly in this body: `Array.isArray`, `Math.min`, `Math.round`, `Number`, `Number.isFinite`, `error63.metadata.get`, `findServerRetryAfterMs`, `seen.add`, `seen.has`.

SHA-256 of the source span: `3e568c3276345aef1cedac7a5aab9a8022f1a19e1f5a36da596390e379f2bdb2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
