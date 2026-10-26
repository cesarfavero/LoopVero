# `createListEmailInboxesTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/list-email-inboxes-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/list-email-inboxes-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764911-764911](../../../../../../../reference/runtime/host-main.cjs#L764911-L764911) | `ArrowFunctionExpression` | yes | `_ctx, _args, d` |
| [evaluation:558279-558279](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558279-L558279) | `ArrowFunctionExpression` | yes | `_ctx, _args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764911-764911](../../../../../../../reference/runtime/host-main.cjs#L764911-L764911) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:764911 uses an implicit arrow-function return.
| [evaluation:558279-558279](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558279-L558279) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:558279 uses an implicit arrow-function return.

### host:764911

Calls written directly in this body: `d.email.listInboxes`, `renderEmailInboxes`.

SHA-256 of the source span: `fbe51bce4a70f177fc6623f05881f1d69005513da0a0e72abcf6b27beed11f64`.

### evaluation:558279

Calls written directly in this body: `d.email.listInboxes`, `renderEmailInboxes`.

SHA-256 of the source span: `fbe51bce4a70f177fc6623f05881f1d69005513da0a0e72abcf6b27beed11f64`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
