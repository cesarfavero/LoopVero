# `parseAutomationNoticeIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-file-format.ts` · [Module README](../../../../../modules/core/automations/automation-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716480-716490](../../../../../../reference/runtime/host-main.cjs#L716480-L716490) | `FunctionDeclaration` | no | `value` |
| [evaluation:627194-627204](../../../../../../reference/runtime/sand-eval-runner.cjs#L627194-L627204) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716480-716490](../../../../../../reference/runtime/host-main.cjs#L716480-L716490) | 3 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:627194-627204](../../../../../../reference/runtime/sand-eval-runner.cjs#L627194-L627204) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:716480

Calls written directly in this body: `Array.isArray`, `entry.trim`, `ids.includes`, `ids.push`, `isAutomationNoticeId`.

SHA-256 of the source span: `71d6118ea1fa3c8a21fb9c9165de74e0693845f5f79b8eadea4b999f8417907b`.

### evaluation:627194

Calls written directly in this body: `Array.isArray`, `entry.trim`, `ids.includes`, `ids.push`, `isAutomationNoticeId`.

SHA-256 of the source span: `71d6118ea1fa3c8a21fb9c9165de74e0693845f5f79b8eadea4b999f8417907b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
