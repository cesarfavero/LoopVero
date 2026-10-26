# `refineShopping`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741514-741529](../../../../../../../reference/runtime/host-main.cjs#L741514-L741529) | `FunctionDeclaration` | no | `value, ctx` |
| [evaluation:482461-482476](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482461-L482476) | `FunctionDeclaration` | no | `value, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741514-741529](../../../../../../../reference/runtime/host-main.cjs#L741514-L741529) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:482461-482476](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482461-L482476) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:741514

Calls written directly in this body: `ctx.addIssue`, `isFieldProvided`.

SHA-256 of the source span: `fa21bd480f3123f46e0993977314cfda004f3907e1384521babc5a2e104eabb2`.

### evaluation:482461

Calls written directly in this body: `ctx.addIssue`, `isFieldProvided`.

SHA-256 of the source span: `746da47bcbf15969bead3db148d01271e4cbd09c89edb5ae185ad36a07e52dff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
