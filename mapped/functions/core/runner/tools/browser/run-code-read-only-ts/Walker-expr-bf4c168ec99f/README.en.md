# `Walker.expr`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:749897-750007](../../../../../../../../reference/runtime/host-main.cjs#L749897-L750007) | `method` | no | `node2, scope` |
| [evaluation:522748-522858](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522748-L522858) | `method` | no | `node2, scope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749897-750007](../../../../../../../../reference/runtime/host-main.cjs#L749897-L750007) | 47 | 4 | 0 | 28 | 0 | 0 |
| [evaluation:522748-522858](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522748-L522858) | 47 | 4 | 0 | 28 | 0 | 0 |

### host:749897

Calls written directly in this body: `DATA_CONSTRUCTORS.has`, `GLOBAL_FUNCTIONS.has`, `GLOBAL_VALUES.has`, `LOGICAL_ASSIGNMENTS.has`, `arrayOf`, `elementOf`, `fail2`, `isDataLike`, `isInlineFunction`, `isObjectKind`, `new Set`, `propertyKeyName`, `scope.lookup`, `this.assignTarget`, `this.call`, `this.dataOnly`, `this.expr`, `this.isNumeric`, `this.member`, `this.plainArgs`, `tracked.add`.

Assignment or increment targets: `kind`.

SHA-256 of the source span: `01acae84e5fb7e2254ece2035a6f5261985f72f15f4de749a8ea404fc5a9c7fb`.

### evaluation:522748

Calls written directly in this body: `DATA_CONSTRUCTORS.has`, `GLOBAL_FUNCTIONS.has`, `GLOBAL_VALUES.has`, `LOGICAL_ASSIGNMENTS.has`, `arrayOf2`, `elementOf`, `fail`, `isDataLike`, `isInlineFunction`, `isObjectKind`, `new Set`, `propertyKeyName`, `scope.lookup`, `this.assignTarget`, `this.call`, `this.dataOnly`, `this.expr`, `this.isNumeric`, `this.member`, `this.plainArgs`, `tracked.add`.

Assignment or increment targets: `kind`.

SHA-256 of the source span: `4683229e6b6283a7a4b328f28a266c170c05b79be7531acf2bb353a4fb24cf21`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
