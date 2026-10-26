# `fullSchemaInAppVariants`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742096-742098](../../../../../../../reference/runtime/host-main.cjs#L742096-L742098) | `FunctionDeclaration` | no | `schema3` |
| [evaluation:483043-483045](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483043-L483045) | `FunctionDeclaration` | no | `schema3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742096-742098](../../../../../../../reference/runtime/host-main.cjs#L742096-L742098) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:483043-483045](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483043-L483045) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742096

Calls written directly in this body: `inAppVariantsOf`, `withActTrims`, `withOpenTrims`.

SHA-256 of the source span: `8b0394d36e2ebe3a7a12dd996565bf97ad6c2acfb2e3c9d9719f67680e479994`.

### evaluation:483043

Calls written directly in this body: `inAppVariantsOf`, `withActTrims`, `withOpenTrims`.

SHA-256 of the source span: `8b0394d36e2ebe3a7a12dd996565bf97ad6c2acfb2e3c9d9719f67680e479994`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
