# `byRecency2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/virtual-mounts/in-process-search.ts` · [Module README](../../../../../modules/core/virtual-mounts/in-process-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765983-765985](../../../../../../reference/runtime/host-main.cjs#L765983-L765985) | `FunctionDeclaration` | no | `first, second` |
| [evaluation:559347-559349](../../../../../../reference/runtime/sand-eval-runner.cjs#L559347-L559349) | `FunctionDeclaration` | no | `first, second` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765983-765985](../../../../../../reference/runtime/host-main.cjs#L765983-L765985) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559347-559349](../../../../../../reference/runtime/sand-eval-runner.cjs#L559347-L559349) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:765983

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `bd3651dfc483a8ccca04b875ebb01e2823a83b64057d48316e7fa61af77a25b0`.

### evaluation:559347

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `bd3651dfc483a8ccca04b875ebb01e2823a83b64057d48316e7fa61af77a25b0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
