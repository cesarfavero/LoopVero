# `rewriteMcpText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/large-output-spill.ts` · [Module README](../../../../../modules/core/runner/large-output-spill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742936-742947](../../../../../../reference/runtime/host-main.cjs#L742936-L742947) | `FunctionDeclaration` | no | `success2, rewrite` |
| [evaluation:515708-515719](../../../../../../reference/runtime/sand-eval-runner.cjs#L515708-L515719) | `FunctionDeclaration` | no | `success2, rewrite` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742936-742947](../../../../../../reference/runtime/host-main.cjs#L742936-L742947) | 3 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:515708-515719](../../../../../../reference/runtime/sand-eval-runner.cjs#L515708-L515719) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:742936

Calls written directly in this body: `rewrite`, `success2.clone`.

Assignment or increment targets: `changed`, `item.content.value.text`.

SHA-256 of the source span: `a0d070580bdb02d9cd7e0f449654ab5902a03b8c964c8589df98756937fadbd3`.

### evaluation:515708

Calls written directly in this body: `rewrite`, `success2.clone`.

Assignment or increment targets: `changed`, `item.content.value.text`.

SHA-256 of the source span: `a0d070580bdb02d9cd7e0f449654ab5902a03b8c964c8589df98756937fadbd3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
