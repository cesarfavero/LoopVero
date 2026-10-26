# `withLegacyUpdateStateForwarding`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/legacy-update-state-forwarding.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/legacy-update-state-forwarding-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:555729-555785](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555729-L555785) | `FunctionDeclaration` | no | `tools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555729-555785](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555729-L555785) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:555729

Calls written directly in this body: `new Map`, `tools.find`, `tools.map`.

SHA-256 of the source span: `569dd11f21923bdefd5022c1125c861944a94a15ccf718f6d40aca06fb45e183`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
