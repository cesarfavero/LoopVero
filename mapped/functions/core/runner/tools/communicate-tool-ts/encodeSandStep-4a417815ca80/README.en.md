# `encodeSandStep`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communicate-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724959-724961](../../../../../../../reference/runtime/host-main.cjs#L724959-L724961) | `FunctionDeclaration` | no | `payload` |
| [evaluation:479930-479932](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479930-L479932) | `FunctionDeclaration` | no | `payload` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724959-724961](../../../../../../../reference/runtime/host-main.cjs#L724959-L724961) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479930-479932](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479930-L479932) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724959

Calls written directly in this body: `JSON.stringify`.

SHA-256 of the source span: `5cf881bc6a58533854f9554807d5606bacebfb2f9a3f57e46067f60989a85b9e`.

### evaluation:479930

Calls written directly in this body: `JSON.stringify`.

SHA-256 of the source span: `5cf881bc6a58533854f9554807d5606bacebfb2f9a3f57e46067f60989a85b9e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
