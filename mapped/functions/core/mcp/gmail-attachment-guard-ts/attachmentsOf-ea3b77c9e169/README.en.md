# `attachmentsOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-attachment-guard.ts` · [Module README](../../../../../modules/core/mcp/gmail-attachment-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584276-584285](../../../../../../reference/runtime/sand-eval-runner.cjs#L584276-L584285) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584276-584285](../../../../../../reference/runtime/sand-eval-runner.cjs#L584276-L584285) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:584276

Calls written directly in this body: `Array.isArray`, `args.args.arguments.toJson`, `args.args.attachments.toJson`, `list.flatMap`.

SHA-256 of the source span: `0b30e20498addbaca2f16150c9c53b973820ab01c89d7c5af1a7b7ad7d7c8d8d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
