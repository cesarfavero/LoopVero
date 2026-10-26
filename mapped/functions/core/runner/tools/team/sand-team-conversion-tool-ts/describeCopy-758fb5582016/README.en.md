# `describeCopy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/team/sand-team-conversion-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/team/sand-team-conversion-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781569-781584](../../../../../../../../reference/runtime/host-main.cjs#L781569-L781584) | `FunctionDeclaration` | no | `outcome` |
| [evaluation:581916-581931](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581916-L581931) | `FunctionDeclaration` | no | `outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781569-781584](../../../../../../../../reference/runtime/host-main.cjs#L781569-L781584) | 7 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:581916-581931](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581916-L581931) | 7 | 0 | 0 | 5 | 0 | 0 |

### host:781569

Calls written directly in this body: `.join`, `outcome.blockers.map`, `refusal2`.

SHA-256 of the source span: `8dfee51752a1876d0bbd52fec1891a3c548edc529a0a64b765f05f88e0241342`.

### evaluation:581916

Calls written directly in this body: `.join`, `outcome.blockers.map`, `refusal2`.

SHA-256 of the source span: `8dfee51752a1876d0bbd52fec1891a3c548edc529a0a64b765f05f88e0241342`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
