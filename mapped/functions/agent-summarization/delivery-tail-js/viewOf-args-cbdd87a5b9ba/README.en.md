# `viewOf/args`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/delivery-tail.js` · [Module README](../../../../modules/agent-summarization/delivery-tail-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621890-621890](../../../../../reference/runtime/host-main.cjs#L621890-L621890) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:306244-306244](../../../../../reference/runtime/sand-eval-runner.cjs#L306244-L306244) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621890-621890](../../../../../reference/runtime/host-main.cjs#L621890-L621890) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:621890 uses an implicit arrow-function return.
| [evaluation:306244-306244](../../../../../reference/runtime/sand-eval-runner.cjs#L306244-L306244) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:306244 uses an implicit arrow-function return.

### host:621890

Calls written directly in this body: `part.args.unwrap`.

SHA-256 of the source span: `5edac789bf933bda75000e222af5929084de43cd71cb7b6cfacdaf0a566c231d`.

### evaluation:306244

Calls written directly in this body: `part.args.unwrap`.

SHA-256 of the source span: `5edac789bf933bda75000e222af5929084de43cd71cb7b6cfacdaf0a566c231d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
