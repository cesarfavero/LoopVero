# `Walker.plainArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750087-750098](../../../../../../../../reference/runtime/host-main.cjs#L750087-L750098) | `method` | no | `args, scope, callbacks = [], paramKinds = []` |
| [evaluation:522938-522949](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522938-L522949) | `method` | no | `args, scope, callbacks = [], paramKinds = []` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750087-750098](../../../../../../../../reference/runtime/host-main.cjs#L750087-L750098) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:522938-522949](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522938-L522949) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:750087

Calls written directly in this body: `args.forEach`.

SHA-256 of the source span: `f02ff29d3cddefe24c63f1e349894dca73d9077f40cb4f7da9733636088427db`.

### evaluation:522938

Calls written directly in this body: `args.forEach`.

SHA-256 of the source span: `8ed4b63de53f97a7159999105b867b09d16e012eb962c2749ddecd058d8b8f45`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
