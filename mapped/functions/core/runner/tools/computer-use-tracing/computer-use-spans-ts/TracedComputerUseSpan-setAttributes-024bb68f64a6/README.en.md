# `TracedComputerUseSpan.setAttributes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [Module README](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742999-743001](../../../../../../../../reference/runtime/host-main.cjs#L742999-L743001) | `method` | no | `attributes` |
| [evaluation:515850-515852](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515850-L515852) | `method` | no | `attributes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742999-743001](../../../../../../../../reference/runtime/host-main.cjs#L742999-L743001) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515850-515852](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515850-L515852) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:742999

Calls written directly in this body: `this.span.setAttributes`.

SHA-256 of the source span: `fcfd73a73e1dc1728c9fce1b4ea19171c10724b0109131fedb08c08c8ab4feca`.

### evaluation:515850

Calls written directly in this body: `this.span.setAttributes`.

SHA-256 of the source span: `fcfd73a73e1dc1728c9fce1b4ea19171c10724b0109131fedb08c08c8ab4feca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
