# `findConnectorServedOn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/external-send/tool-calls.ts` · [Module README](../../../../../../modules/core/runner/external-send/tool-calls-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:539184-539189](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539184-L539189) | `FunctionDeclaration` | no | `connectors, serverHost, accepts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:539184-539189](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539184-L539189) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:539184

Calls written directly in this body: `connectors.find`, `host.split`, `serverHost.toLowerCase`.

SHA-256 of the source span: `f1a546f7491549afabeff6e47c8896154f7bf02c549145c8d8d26fc8eabb3f6f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
