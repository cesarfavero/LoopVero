# `createSandCursorBackendClient`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/node/cursor-backend/cursor-inference.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225176-225180](../../../../../../../reference/runtime/host-main.cjs#L225176-L225180) | `FunctionDeclaration` | no | `service, options2` |
| [evaluation:512247-512251](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512247-L512251) | `FunctionDeclaration` | no | `service, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225176-225180](../../../../../../../reference/runtime/host-main.cjs#L225176-L225180) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:512247-512251](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512247-L512251) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225176

Calls written directly in this body: `createClient`, `createSandBackendTransport`, `invariant`.

SHA-256 of the source span: `7cbb9ba5841a02da682536ae29f81595caadc4fffb9854a90bac04b2ffd0bf17`.

### evaluation:512247

Calls written directly in this body: `createClient`, `createSandBackendTransport`, `invariant`.

SHA-256 of the source span: `7cbb9ba5841a02da682536ae29f81595caadc4fffb9854a90bac04b2ffd0bf17`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
