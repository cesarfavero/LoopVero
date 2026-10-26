# `build/onSendMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/box-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779013-779022](../../../../../../../../reference/runtime/host-main.cjs#L779013-L779022) | `ArrowFunctionExpression` | no | `message, timestampMs, boxHandoffStamp` |
| [host:779124-779139](../../../../../../../../reference/runtime/host-main.cjs#L779124-L779139) | `ArrowFunctionExpression` | no | `message, timestampMs, userFormStamp` |
| [evaluation:578747-578756](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578747-L578756) | `ArrowFunctionExpression` | no | `message, timestampMs, boxHandoffStamp` |
| [evaluation:578858-578873](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578858-L578873) | `ArrowFunctionExpression` | no | `message, timestampMs, userFormStamp` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779013-779022](../../../../../../../../reference/runtime/host-main.cjs#L779013-L779022) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:779013 uses an implicit arrow-function return.
| [host:779124-779139](../../../../../../../../reference/runtime/host-main.cjs#L779124-L779139) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:578747-578756](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578747-L578756) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:578747 uses an implicit arrow-function return.
| [evaluation:578858-578873](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578858-L578873) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:779013

Calls written directly in this body: `host.emitUpdate`.

SHA-256 of the source span: `c329c1c4329c6841503c880a8d5327d3250d05254745c8e7cca329f550330149`.

### host:779124

Calls written directly in this body: `host.emitUpdate`, `offer.raiseInParent`.

SHA-256 of the source span: `947dac8030fcbef0907431348ca6591bbc8221006e8574d85940eb31e49f170c`.

### evaluation:578747

Calls written directly in this body: `host.emitUpdate`.

SHA-256 of the source span: `c329c1c4329c6841503c880a8d5327d3250d05254745c8e7cca329f550330149`.

### evaluation:578858

Calls written directly in this body: `host.emitUpdate`, `offer.raiseInParent`.

SHA-256 of the source span: `947dac8030fcbef0907431348ca6591bbc8221006e8574d85940eb31e49f170c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
