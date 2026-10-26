# `SandSendRefusedError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761303-761311](../../../../../../../reference/runtime/host-main.cjs#L761303-L761311) | `method` | no | `category, reason, args` |
| [evaluation:552118-552126](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552118-L552126) | `method` | no | `category, reason, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761303-761311](../../../../../../../reference/runtime/host-main.cjs#L761303-L761311) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:552118-552126](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552118-L552126) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:761303

Calls written directly in this body: `super`.

Assignment or increment targets: `this.args`, `this.category`.

SHA-256 of the source span: `78ee14920f74c38573c36f498ba0e770af1da43043d3ff18b537bd1f14391f16`.

### evaluation:552118

Calls written directly in this body: `super`.

Assignment or increment targets: `this.args`, `this.category`.

SHA-256 of the source span: `78ee14920f74c38573c36f498ba0e770af1da43043d3ff18b537bd1f14391f16`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
