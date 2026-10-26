# `jsonValueFrom`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/struct-from-record.ts` · [Module README](../../../../../modules/core/runner/struct-from-record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699148-699174](../../../../../../reference/runtime/host-main.cjs#L699148-L699174) | `FunctionDeclaration` | no | `value, path33` |
| [evaluation:512979-513005](../../../../../../reference/runtime/sand-eval-runner.cjs#L512979-L513005) | `FunctionDeclaration` | no | `value, path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699148-699174](../../../../../../reference/runtime/host-main.cjs#L699148-L699174) | 9 | 0 | 0 | 5 | 3 | 0 |
| [evaluation:512979-513005](../../../../../../reference/runtime/sand-eval-runner.cjs#L512979-L513005) | 9 | 0 | 0 | 5 | 3 | 0 |

### host:699148

Calls written directly in this body: `Array.isArray`, `Number.isFinite`, `Object.getPrototypeOf`, `jsonObjectFrom`, `new TypeError`, `value.map`.

Explicit throw targets: `TypeError`.

SHA-256 of the source span: `535cd5b6179c71f533cea5d287c1e4db4ec1ad956d2eb35290febb8809391579`.

### evaluation:512979

Calls written directly in this body: `Array.isArray`, `Number.isFinite`, `Object.getPrototypeOf`, `jsonObjectFrom`, `new TypeError`, `value.map`.

Explicit throw targets: `TypeError`.

SHA-256 of the source span: `535cd5b6179c71f533cea5d287c1e4db4ec1ad956d2eb35290febb8809391579`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
