# `afterDeny`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meeting-chat-sender.ts` · [Module README](../../../../../modules/core/meetings/meeting-chat-sender-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760326-760329](../../../../../../reference/runtime/host-main.cjs#L760326-L760329) | `ArrowFunctionExpression` | no | `meetingId, drafts` |
| [host:760333-760336](../../../../../../reference/runtime/host-main.cjs#L760333-L760336) | `ArrowFunctionExpression` | no | `meetingId, drafts` |
| [evaluation:551141-551144](../../../../../../reference/runtime/sand-eval-runner.cjs#L551141-L551144) | `ArrowFunctionExpression` | no | `meetingId, drafts` |
| [evaluation:551148-551151](../../../../../../reference/runtime/sand-eval-runner.cjs#L551148-L551151) | `ArrowFunctionExpression` | no | `meetingId, drafts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760326-760329](../../../../../../reference/runtime/host-main.cjs#L760326-L760329) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:760326 uses an implicit arrow-function return.
| [host:760333-760336](../../../../../../reference/runtime/host-main.cjs#L760333-L760336) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:760333 uses an implicit arrow-function return.
| [evaluation:551141-551144](../../../../../../reference/runtime/sand-eval-runner.cjs#L551141-L551144) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:551141 uses an implicit arrow-function return.
| [evaluation:551148-551151](../../../../../../reference/runtime/sand-eval-runner.cjs#L551148-L551151) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:551148 uses an implicit arrow-function return.

### host:760326

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `d37208944a14148412687fd101d958fa962725f8affa8a1c947edf5f01d8301d`.

### host:760333

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `1e59830137d720e24bb63caed1dd1cd3512489c8c1c8746f90e37bac3a82bd00`.

### evaluation:551141

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `d37208944a14148412687fd101d958fa962725f8affa8a1c947edf5f01d8301d`.

### evaluation:551148

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `1e59830137d720e24bb63caed1dd1cd3512489c8c1c8746f90e37bac3a82bd00`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
