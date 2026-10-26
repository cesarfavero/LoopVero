# `hostNoFollowRoot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/durable-file-policy.ts` · [Module README](../../../../modules/host/durable-file-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453699-453701](../../../../../reference/runtime/host-main.cjs#L453699-L453701) | `FunctionDeclaration` | no | `nonLinuxRoot` |
| [evaluation:627473-627475](../../../../../reference/runtime/sand-eval-runner.cjs#L627473-L627475) | `FunctionDeclaration` | no | `nonLinuxRoot` |
| [state-worker:447-449](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L447-L449) | `FunctionDeclaration` | no | `nonLinuxRoot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453699-453701](../../../../../reference/runtime/host-main.cjs#L453699-L453701) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627473-627475](../../../../../reference/runtime/sand-eval-runner.cjs#L627473-L627475) | 1 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:447-449](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L447-L449) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:453699

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `de9a26d51a382a75a7bc3e17f036befd481d05d3a6b37b58071fbca7ae081d4e`.

### evaluation:627473

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `de9a26d51a382a75a7bc3e17f036befd481d05d3a6b37b58071fbca7ae081d4e`.

### state-worker:447

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `de9a26d51a382a75a7bc3e17f036befd481d05d3a6b37b58071fbca7ae081d4e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
