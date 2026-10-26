# `createCursorInferencePromptSession`

**Fonte primária:** [sand-eval-runner.cjs:597538–597547](../../../reference/runtime/sand-eval-runner.cjs#L597538-L597547).

**Componente:** [inference](../../components/inference/README.md). **Evidência:** implementação compilada inspecionada estaticamente; sem execução do original.

## Responsabilidade

Converter opções do harness em uma sessão de prompt que usa o protocolo de inferência original.

## Algoritmo completo

1. Criar cliente `InferenceService` com `createSandCursorBackendClient`.
2. Criar `ProtoSessionProvider` com cliente, modelo solicitado, config e motivo de inferência.
3. Obter sessão com `imageResizingWithContentHashMiddleware`.

É uma função pequena de composição. O trabalho de stream fica no provider/executor; o loop do agente fica no runner.

## Entradas e dependências

Recebe opções autenticadas por getters, contexto e identidade de modelo. Não abre um modelo local nem carrega pesos. O middleware de imagens trabalha na sessão; a factory de URLs de mídia é uma dependência distinta de `createSandEvalInference`.

## Saída

A prompt session é consumida por wrappers do runner que observam modelo servido, usage, prefixos e deadlines. No executor subjacente, `client.stream` produz eventos e Promises de metadados, conforme [sand-eval-runner.cjs:494620–494725](../../../reference/runtime/sand-eval-runner.cjs#L494620-L494725).

## O que permanece externo

A função permite nomear precisamente a fronteira RPC. Não contém o backend que seleciona fornecedor, executa modelo ou decide roteamento interno. Não foi chamada nesta pesquisa.
