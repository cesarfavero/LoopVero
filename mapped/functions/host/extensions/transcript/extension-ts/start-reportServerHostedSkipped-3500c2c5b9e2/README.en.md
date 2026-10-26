# `start/reportServerHostedSkipped`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/extension.ts` · [Module README](../../../../../../modules/host/extensions/transcript/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783695-783695](../../../../../../../reference/runtime/host-main.cjs#L783695-L783695) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783695-783695](../../../../../../../reference/runtime/host-main.cjs#L783695-L783695) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:783695 uses an implicit arrow-function return.

### host:783695

Calls written directly in this body: `context2.deps.telemetry.logs.reportBoxHarnessServerHostedSkipped`.

SHA-256 of the source span: `5711b1a6d0487831d6226da727b9dc3d543aa34c30ec42f98feb098efc7fcb1d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
