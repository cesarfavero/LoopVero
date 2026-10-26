# `createSandTaskTools`

[English](README.en.md) · [Português (Brasil)](README.md)

[Component: tasks](../../components/tasks/README.en.md) · [Index](../../README.en.md)

**Primary source:** [host-main.cjs:739436-739566](../../../reference/runtime/host-main.cjs#L739436-L739566). Static analysis of the original snapshot; names preserved from the bundle.

## Responsibility

`createSandTaskTools(tasks)` assembles CreateTask, UpdateTask, and ReadTask over a document port. The plural name indicates operations on persistent records, not execution delegation.

## Operations

Create validates name/description and an optional body, calls `port.create`, and returns a record with an ID/version. Update transforms arguments into an edit through `taskEditOf`, calls `port.update`, and announces the result only after the response. Read without an ID lists open tasks by default, or recently completed ones; with an ID, it reads one record and rejects a nonexistent ID.

## Persistence and errors

The actual effect takes place in the port. The factory converts errors named `SandAgentTaskDocumentError` into `SandToolInputError`; infrastructure errors remain errors. There is no explicit automatic retry in this function. There is no public `expectedVersion` parameter, although the result exposes version.

## Context for the model

The tools receive dynamic hints. The description instructs the model to retain the objective, decisions, results, and next steps in the document, linking its ID to the thread. These are instructions; creating the document does not start computation or mark the task as completed by itself.

## Essential distinction

Document IDs, turn IDs, and subagent IDs are not interchangeable. The subagents field holds references and replaces the entire list on update. The server implementation must be recovered to establish atomicity, version control, and ACLs.
