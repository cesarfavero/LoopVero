# `FileAutomationStore.count`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720600-720602](../../../../../../reference/runtime/host-main.cjs#L720600-L720602) | `method` | no | `(none)` |
| [evaluation:627951-627953](../../../../../../reference/runtime/sand-eval-runner.cjs#L627951-L627953) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720600-720602](../../../../../../reference/runtime/host-main.cjs#L720600-L720602) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627951-627953](../../../../../../reference/runtime/sand-eval-runner.cjs#L627951-L627953) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:720600

Calls written directly in this body: `.filter`, `this.listIds`.

SHA-256 of the source span: `f979a1e3765f745d356524d042fc40ac0b8291078d2ffd241e7d75b78f1f0d8d`.

### evaluation:627951

Calls written directly in this body: `.filter`, `this.listIds`.

SHA-256 of the source span: `f979a1e3765f745d356524d042fc40ac0b8291078d2ffd241e7d75b78f1f0d8d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
