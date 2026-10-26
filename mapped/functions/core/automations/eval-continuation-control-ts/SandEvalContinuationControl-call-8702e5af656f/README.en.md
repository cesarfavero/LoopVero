# `SandEvalContinuationControl.call`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/eval-continuation-control.ts` · [Module README](../../../../../modules/core/automations/eval-continuation-control-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628610-628629](../../../../../../reference/runtime/sand-eval-runner.cjs#L628610-L628629) | `method` | yes | `path33, body` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628610-628629](../../../../../../reference/runtime/sand-eval-runner.cjs#L628610-L628629) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:628610

Calls written directly in this body: `continuationControlDeadline.run`.

SHA-256 of the source span: `f4ccf1caa180970cc2eec77ce2145b673e8842e880fb90a005f5e65056d3c33f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
