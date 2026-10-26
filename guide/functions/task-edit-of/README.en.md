# `taskEditOf`

[English](README.en.md) · [Português (Brasil)](README.md)

[Component: tasks](../../components/tasks/README.en.md) · [Index](../../README.en.md)

**Primary source:** [host-main.cjs:739484-739505](../../../reference/runtime/host-main.cjs#L739484-L739505). Static analysis of the original snapshot; names preserved from the bundle.

## Contract

`taskEditOf(args)` converts UpdateTask's public arguments into an internal union of three formats. It is a pure function, without writes or network access.

| Selection | Output |
| --- | --- |
| Name, description, status, subagents, or body | `{kind:"fields",fields}` |
| Complete document in content | `{kind:"rewrite",content}` |
| old_string and/or new_string | `{kind:"replace",oldString,newString}` |

## Actual validation

The function computes whether each category is present and requires exactly one. Passing body and content together fails. Passing no edit also fails. Omitted values do not enter the fields object.

There is a difference between the textual contract and this helper's implementation: the description requests the old_string/new_string pair and a unique occurrence, but the helper alone accepts one side being absent and turns it into an empty string. Occurrence validation and any refusal of an empty search belong to the document application behind the port.

## Engineering implication

A faithful reconstruction must not attribute locks, version checking, or document search to this function. It only selects the operation. Those behaviors need to be implemented and tested in the document layer when their source is located.
