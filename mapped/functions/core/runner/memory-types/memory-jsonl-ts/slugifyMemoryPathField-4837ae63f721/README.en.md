# `slugifyMemoryPathField`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-types/memory-jsonl.ts` · [Module README](../../../../../../modules/core/runner/memory-types/memory-jsonl-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754631-754633](../../../../../../../reference/runtime/host-main.cjs#L754631-L754633) | `FunctionDeclaration` | no | `value` |
| [evaluation:537598-537600](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537598-L537600) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754631-754633](../../../../../../../reference/runtime/host-main.cjs#L754631-L754633) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:537598-537600](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537598-L537600) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754631

Calls written directly in this body: `.replace`, `.slice`, `.toLowerCase`, `value.normalize`.

SHA-256 of the source span: `0fae1278875c6407eb2bb726c2baa7a725ddad35edaa14fc74ed8957418f7ee8`.

### evaluation:537598

Calls written directly in this body: `.replace`, `.slice`, `.toLowerCase`, `value.normalize`.

SHA-256 of the source span: `0fae1278875c6407eb2bb726c2baa7a725ddad35edaa14fc74ed8957418f7ee8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
