# `xai-compaction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/durable-blocks.js` · [Module README](../../../../modules/agent-summarization/durable-blocks-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620000-620008](../../../../../reference/runtime/host-main.cjs#L620000-L620008) | `ArrowFunctionExpression` | no | `enrichments` |
| [host:620024-620024](../../../../../reference/runtime/host-main.cjs#L620024-L620024) | `ArrowFunctionExpression` | no | `enrichments` |
| [host:620031-620031](../../../../../reference/runtime/host-main.cjs#L620031-L620031) | `ArrowFunctionExpression` | no | `enrichments` |
| [evaluation:304354-304362](../../../../../reference/runtime/sand-eval-runner.cjs#L304354-L304362) | `ArrowFunctionExpression` | no | `enrichments` |
| [evaluation:304378-304378](../../../../../reference/runtime/sand-eval-runner.cjs#L304378-L304378) | `ArrowFunctionExpression` | no | `enrichments` |
| [evaluation:304385-304385](../../../../../reference/runtime/sand-eval-runner.cjs#L304385-L304385) | `ArrowFunctionExpression` | no | `enrichments` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620000-620008](../../../../../reference/runtime/host-main.cjs#L620000-L620008) | 2 | 0 | 0 | 2 | 0 | 0 |
| [host:620024-620024](../../../../../reference/runtime/host-main.cjs#L620024-L620024) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:620024 uses an implicit arrow-function return.
| [host:620031-620031](../../../../../reference/runtime/host-main.cjs#L620031-L620031) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:620031 uses an implicit arrow-function return.
| [evaluation:304354-304362](../../../../../reference/runtime/sand-eval-runner.cjs#L304354-L304362) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:304378-304378](../../../../../reference/runtime/sand-eval-runner.cjs#L304378-L304378) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:304378 uses an implicit arrow-function return.
| [evaluation:304385-304385](../../../../../reference/runtime/sand-eval-runner.cjs#L304385-L304385) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:304385 uses an implicit arrow-function return.

### host:620000

Calls written directly in this body: `unwrapPlanContent`.

SHA-256 of the source span: `e02e1afbded2d09fb3aeed75b8e03e31fbd2847e39ec4af7cb5fd8f5010d3b67`.

### host:620024

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `38a114257db688f40e90a405df092175185dcc1cf72113b3f7314db3eefc5881`.

### host:620031

Calls written directly in this body: `todoUpdateTag`.

SHA-256 of the source span: `5de0a7c7dd05d11f70f0bd47c43d449f4f6ef9f9b5c00d2e47933ba7753ba66e`.

### evaluation:304354

Calls written directly in this body: `unwrapPlanContent`.

SHA-256 of the source span: `e02e1afbded2d09fb3aeed75b8e03e31fbd2847e39ec4af7cb5fd8f5010d3b67`.

### evaluation:304378

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `38a114257db688f40e90a405df092175185dcc1cf72113b3f7314db3eefc5881`.

### evaluation:304385

Calls written directly in this body: `todoUpdateTag`.

SHA-256 of the source span: `5de0a7c7dd05d11f70f0bd47c43d449f4f6ef9f9b5c00d2e47933ba7753ba66e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
