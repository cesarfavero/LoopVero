# `build/listRunningSubagents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/turn-builders/subagent-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/subagent-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781157-781157](../../../../../../../../reference/runtime/host-main.cjs#L781157-L781157) | `ArrowFunctionExpression` | no | `(none)` |
| [host:781163-781163](../../../../../../../../reference/runtime/host-main.cjs#L781163-L781163) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:581504-581504](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581504-L581504) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:581510-581510](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581510-L581510) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781157-781157](../../../../../../../../reference/runtime/host-main.cjs#L781157-L781157) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:781157 uses an implicit arrow-function return.
| [host:781163-781163](../../../../../../../../reference/runtime/host-main.cjs#L781163-L781163) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:781163 uses an implicit arrow-function return.
| [evaluation:581504-581504](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581504-L581504) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:581504 uses an implicit arrow-function return.
| [evaluation:581510-581510](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581510-L581510) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:581510 uses an implicit arrow-function return.

### host:781157

Calls written directly in this body: `detached.listRunning`.

SHA-256 of the source span: `3bb4f9491621aeceeb53b9993fd44d484be324f43a90079ebd38c0b79dc107b7`.

### host:781163

Calls written directly in this body: `host.listRunningSubagents`.

SHA-256 of the source span: `01bf144ec26d2f311735fc9836dc28fd50dfefdd9f0d37784dbf21358fefcce7`.

### evaluation:581504

Calls written directly in this body: `detached.listRunning`.

SHA-256 of the source span: `3bb4f9491621aeceeb53b9993fd44d484be324f43a90079ebd38c0b79dc107b7`.

### evaluation:581510

Calls written directly in this body: `host.listRunningSubagents`.

SHA-256 of the source span: `01bf144ec26d2f311735fc9836dc28fd50dfefdd9f0d37784dbf21358fefcce7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
