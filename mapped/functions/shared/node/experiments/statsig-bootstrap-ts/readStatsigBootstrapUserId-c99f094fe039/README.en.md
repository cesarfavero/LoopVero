# `readStatsigBootstrapUserId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/statsig-bootstrap.ts` · [Module README](../../../../../../modules/shared/node/experiments/statsig-bootstrap-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552381-552395](../../../../../../../reference/runtime/host-main.cjs#L552381-L552395) | `FunctionDeclaration` | no | `config2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552381-552395](../../../../../../../reference/runtime/host-main.cjs#L552381-L552395) | 3 | 0 | 0 | 4 | 0 | 1 |

### host:552381

Calls written directly in this body: `JSON.parse`, `errorLogTag`, `reportExperimentsDiagnostic`.

SHA-256 of the source span: `0b28574510dfa408d35256e5876a3b91f7b954821b1fbccb7daf4e55e7cf9f55`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
