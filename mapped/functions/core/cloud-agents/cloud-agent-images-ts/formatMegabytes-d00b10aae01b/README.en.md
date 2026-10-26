# `formatMegabytes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-images.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-images-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770108-770110](../../../../../../reference/runtime/host-main.cjs#L770108-L770110) | `FunctionDeclaration` | no | `bytes` |
| [evaluation:567272-567274](../../../../../../reference/runtime/sand-eval-runner.cjs#L567272-L567274) | `FunctionDeclaration` | no | `bytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770108-770110](../../../../../../reference/runtime/host-main.cjs#L770108-L770110) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:567272-567274](../../../../../../reference/runtime/sand-eval-runner.cjs#L567272-L567274) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:770108

Calls written directly in this body: `Math.round`.

SHA-256 of the source span: `380d03c519ccfd5ad752981916ade8507d1a3019b3cfa9ab656bee0d465db7c5`.

### evaluation:567272

Calls written directly in this body: `Math.round`.

SHA-256 of the source span: `380d03c519ccfd5ad752981916ade8507d1a3019b3cfa9ab656bee0d465db7c5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
