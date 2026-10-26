# `offeredProductSearchPort`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/web-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/web-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:782052-782054](../../../../../../../../reference/runtime/host-main.cjs#L782052-L782054) | `FunctionDeclaration` | no | `host` |
| [evaluation:582397-582399](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582397-L582399) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782052-782054](../../../../../../../../reference/runtime/host-main.cjs#L782052-L782054) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:582397-582399](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582397-L582399) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:782052

Calls written directly in this body: `host.gates.productSearch`, `sandWebToolOffers`.

SHA-256 of the source span: `ebdd102311e99475950ecc9d868f93a3d8a1cfb7415eccefb3ff040ef0d4cb28`.

### evaluation:582397

Calls written directly in this body: `host.gates.productSearch`, `sandWebToolOffers`.

SHA-256 of the source span: `ebdd102311e99475950ecc9d868f93a3d8a1cfb7415eccefb3ff040ef0d4cb28`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
