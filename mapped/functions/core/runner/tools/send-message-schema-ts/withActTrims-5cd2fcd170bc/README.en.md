# `withActTrims`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742086-742095](../../../../../../../reference/runtime/host-main.cjs#L742086-L742095) | `FunctionDeclaration` | no | `schema3` |
| [evaluation:483033-483042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483033-L483042) | `FunctionDeclaration` | no | `schema3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742086-742095](../../../../../../../reference/runtime/host-main.cjs#L742086-L742095) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:483033-483042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483033-L483042) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742086

Calls written directly in this body: `schema3.shape.alt.describe`, `schema3.shape.bcId.describe`, `schema3.shape.images.describe`, `schema3.shape.to.describe`, `schema3.shape.url.describe`.

SHA-256 of the source span: `4a943a024c14af35d80e77bf9428f802a5a1d4f404da0f6c0dd79634e755e526`.

### evaluation:483033

Calls written directly in this body: `schema3.shape.alt.describe`, `schema3.shape.bcId.describe`, `schema3.shape.images.describe`, `schema3.shape.to.describe`, `schema3.shape.url.describe`.

SHA-256 of the source span: `4a943a024c14af35d80e77bf9428f802a5a1d4f404da0f6c0dd79634e755e526`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
