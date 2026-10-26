# `isInlineFunction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:749662-749664](../../../../../../../../reference/runtime/host-main.cjs#L749662-L749664) | `FunctionDeclaration` | no | `node2` |
| [evaluation:522513-522515](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522513-L522515) | `FunctionDeclaration` | no | `node2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749662-749664](../../../../../../../../reference/runtime/host-main.cjs#L749662-L749664) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:522513-522515](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522513-L522515) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:749662

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `7efb8f5a0fc0d37f694f3cc40008a5f5091122c679fa1a51373fd643046337f2`.

### evaluation:522513

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `7efb8f5a0fc0d37f694f3cc40008a5f5091122c679fa1a51373fd643046337f2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
