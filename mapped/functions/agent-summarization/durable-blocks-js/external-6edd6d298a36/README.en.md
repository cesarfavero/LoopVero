# `external`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/durable-blocks.js` · [Module README](../../../../modules/agent-summarization/durable-blocks-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620014-620014](../../../../../reference/runtime/host-main.cjs#L620014-L620014) | `ArrowFunctionExpression` | no | `enrichments, context2` |
| [host:620021-620023](../../../../../reference/runtime/host-main.cjs#L620021-L620023) | `ArrowFunctionExpression` | no | `enrichments` |
| [evaluation:304368-304368](../../../../../reference/runtime/sand-eval-runner.cjs#L304368-L304368) | `ArrowFunctionExpression` | no | `enrichments, context2` |
| [evaluation:304375-304377](../../../../../reference/runtime/sand-eval-runner.cjs#L304375-L304377) | `ArrowFunctionExpression` | no | `enrichments` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620014-620014](../../../../../reference/runtime/host-main.cjs#L620014-L620014) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:620014 uses an implicit arrow-function return.
| [host:620021-620023](../../../../../reference/runtime/host-main.cjs#L620021-L620023) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:620021 uses an implicit arrow-function return.
| [evaluation:304368-304368](../../../../../reference/runtime/sand-eval-runner.cjs#L304368-L304368) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:304368 uses an implicit arrow-function return.
| [evaluation:304375-304377](../../../../../reference/runtime/sand-eval-runner.cjs#L304375-L304377) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:304375 uses an implicit arrow-function return.

### host:620014

Calls written directly in this body: `renderTranscript`.

SHA-256 of the source span: `d25a6b347a418f8a2db383b669e0cc842e0173a010a12ffe948eb7f7db2c518c`.

### host:620021

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `724884a4b2b196c422e48a0c00f7985502d8430ad189781146fe7592fcf4ea7e`.

### evaluation:304368

Calls written directly in this body: `renderTranscript`.

SHA-256 of the source span: `d25a6b347a418f8a2db383b669e0cc842e0173a010a12ffe948eb7f7db2c518c`.

### evaluation:304375

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `724884a4b2b196c422e48a0c00f7985502d8430ad189781146fe7592fcf4ea7e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
