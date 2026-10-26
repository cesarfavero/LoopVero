# `_MeetingsTools.joiningIn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773148-773152](../../../../../../reference/runtime/host-main.cjs#L773148-L773152) | `method` | no | `row, nowMs2` |
| [evaluation:572374-572378](../../../../../../reference/runtime/sand-eval-runner.cjs#L572374-L572378) | `method` | no | `row, nowMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773148-773152](../../../../../../reference/runtime/host-main.cjs#L773148-L773152) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:572374-572378](../../../../../../reference/runtime/sand-eval-runner.cjs#L572374-L572378) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:773148

Calls written directly in this body: `Math.ceil`, `Math.max`.

SHA-256 of the source span: `a0faa80440c68a47ff672bd177dd3e90723f796fb0b67ae2f188ad4e0e4dc36c`.

### evaluation:572374

Calls written directly in this body: `Math.ceil`, `Math.max`.

SHA-256 of the source span: `61b615c3ae389798f63abd30e5a3033dbd0fabb38ae70c39b5ede65c6a4b262c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
