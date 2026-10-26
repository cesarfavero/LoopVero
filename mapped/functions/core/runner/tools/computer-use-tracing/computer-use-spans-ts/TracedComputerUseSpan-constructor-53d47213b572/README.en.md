# `TracedComputerUseSpan.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [Module README](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742985-742990](../../../../../../../../reference/runtime/host-main.cjs#L742985-L742990) | `method` | no | `ctx, span` |
| [evaluation:515836-515841](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515836-L515841) | `method` | no | `ctx, span` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742985-742990](../../../../../../../../reference/runtime/host-main.cjs#L742985-L742990) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515836-515841](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515836-L515841) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:742985

Calls written directly in this body: `ctx.signal.addEventListener`, `this.endAtAbort`.

Assignment or increment targets: `this.ctx`, `this.span`.

SHA-256 of the source span: `40638665ecdd5e74806dd681b97ce081b49672d16ee396b3c02740cd4eced699`.

### evaluation:515836

Calls written directly in this body: `ctx.signal.addEventListener`, `this.endAtAbort`.

Assignment or increment targets: `this.ctx`, `this.span`.

SHA-256 of the source span: `40638665ecdd5e74806dd681b97ce081b49672d16ee396b3c02740cd4eced699`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
