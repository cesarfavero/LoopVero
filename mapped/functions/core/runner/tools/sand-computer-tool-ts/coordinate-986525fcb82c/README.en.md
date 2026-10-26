# `coordinate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777081-777084](../../../../../../../reference/runtime/host-main.cjs#L777081-L777084) | `FunctionDeclaration` | no | `x, y` |
| [evaluation:576726-576729](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576726-L576729) | `FunctionDeclaration` | no | `x, y` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777081-777084](../../../../../../../reference/runtime/host-main.cjs#L777081-L777084) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:576726-576729](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576726-L576729) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:777081

Calls written directly in this body: `new Coordinate`.

SHA-256 of the source span: `21b24281137976aa9e10faab24bb252bbe6e6d66a76b85250b2a146ff40d6f0e`.

### evaluation:576726

Calls written directly in this body: `new Coordinate`.

SHA-256 of the source span: `21b24281137976aa9e10faab24bb252bbe6e6d66a76b85250b2a146ff40d6f0e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
