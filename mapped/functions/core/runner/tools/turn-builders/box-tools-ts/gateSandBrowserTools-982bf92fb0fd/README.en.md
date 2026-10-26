# `gateSandBrowserTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/box-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778938-778945](../../../../../../../../reference/runtime/host-main.cjs#L778938-L778945) | `FunctionDeclaration` | no | `tools, { gateOnCredentialFillLease, recordFailedBrowserToolCall }` |
| [evaluation:578672-578679](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578672-L578679) | `FunctionDeclaration` | no | `tools, { gateOnCredentialFillLease, recordFailedBrowserToolCall }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778938-778945](../../../../../../../../reference/runtime/host-main.cjs#L778938-L778945) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:578672-578679](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578672-L578679) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:778938

Calls written directly in this body: `tools.map`.

SHA-256 of the source span: `09260e6b4db7cdf4dbcc8bf43f9bc348261bf9b2312ec2ed5774af1a8160e227`.

### evaluation:578672

Calls written directly in this body: `tools.map`.

SHA-256 of the source span: `09260e6b4db7cdf4dbcc8bf43f9bc348261bf9b2312ec2ed5774af1a8160e227`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
