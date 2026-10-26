# `toDriverResponse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/sand-browser-driver-client.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/sand-browser-driver-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724204-724216](../../../../../../../../reference/runtime/host-main.cjs#L724204-L724216) | `FunctionDeclaration` | no | `parsed2` |
| [evaluation:560098-560110](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560098-L560110) | `FunctionDeclaration` | no | `parsed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724204-724216](../../../../../../../../reference/runtime/host-main.cjs#L724204-L724216) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560098-560110](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560098-L560110) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724204

Calls written directly in this body: `booleanField`, `filledControlField`, `nonnegativeNumberField`, `objectFields`, `snapshotMetaField`, `stringField2`.

SHA-256 of the source span: `f59b393728ad694cf2a707e00ed08307e153a55be50b87416fefe308c47a7b53`.

### evaluation:560098

Calls written directly in this body: `booleanField`, `filledControlField`, `nonnegativeNumberField`, `objectFields`, `snapshotMetaField`, `stringField2`.

SHA-256 of the source span: `ec65bfd4ae075ccee5e730267834cc273dc194890d7b234eba4fb092a1d38e50`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
