# `isJsonValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/parse/unknown-record.ts` · [Module README](../../../../../modules/shared/parse/unknown-record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:155304-155317](../../../../../../reference/runtime/host-main.cjs#L155304-L155317) | `FunctionDeclaration` | no | `value` |
| [evaluation:479656-479669](../../../../../../reference/runtime/sand-eval-runner.cjs#L479656-L479669) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:155304-155317](../../../../../../reference/runtime/host-main.cjs#L155304-L155317) | 7 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:479656-479669](../../../../../../reference/runtime/sand-eval-runner.cjs#L479656-L479669) | 7 | 0 | 0 | 5 | 0 | 0 |

### host:155304

Calls written directly in this body: `.every`, `Array.isArray`, `Number.isFinite`, `Object.values`, `isUnknownRecord2`, `value.every`.

SHA-256 of the source span: `e2a6463cd4d9d6c6cfe96071a2ecf48251d101703cb4050627895298589b7568`.

### evaluation:479656

Calls written directly in this body: `.every`, `Array.isArray`, `Number.isFinite`, `Object.values`, `isUnknownRecord2`, `value.every`.

SHA-256 of the source span: `e2a6463cd4d9d6c6cfe96071a2ecf48251d101703cb4050627895298589b7568`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
