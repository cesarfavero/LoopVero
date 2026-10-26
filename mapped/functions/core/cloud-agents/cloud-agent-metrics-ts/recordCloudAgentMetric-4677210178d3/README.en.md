# `recordCloudAgentMetric`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-metrics.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-metrics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:757973-757981](../../../../../../reference/runtime/host-main.cjs#L757973-L757981) | `FunctionDeclaration` | no | `metrics2, record3` |
| [evaluation:544053-544061](../../../../../../reference/runtime/sand-eval-runner.cjs#L544053-L544061) | `FunctionDeclaration` | no | `metrics2, record4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757973-757981](../../../../../../reference/runtime/host-main.cjs#L757973-L757981) | 1 | 0 | 0 | 1 | 0 | 1 |
| [evaluation:544053-544061](../../../../../../reference/runtime/sand-eval-runner.cjs#L544053-L544061) | 1 | 0 | 0 | 1 | 0 | 1 |

### host:757973

Calls written directly in this body: `errorLogTag`, `process.stderr.write`, `record3`.

SHA-256 of the source span: `28febc067b8763deba1d90a48d323e68dc22816cc911f328eb49e86cf1d8d270`.

### evaluation:544053

Calls written directly in this body: `errorLogTag`, `process.stderr.write`, `record4`.

SHA-256 of the source span: `b45d51d2ce1d8c7af481571419eebb9e06e2d9da3208332dae95896b803c2e9c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
