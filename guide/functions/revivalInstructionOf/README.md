# `revivalInstructionOf` e montagem da retomada

## Papel e fonte

Escolhe qual instrução acompanha um lote de resultados de background. É uma política determinística de **tipo de retomada**. A análise semântica de utilidade permanece nas instruções dadas ao modelo. [Implementação](../../../reference/runtime/sand-eval-runner.cjs#L583937-L583948).

## Entrada e saída

Recebe `completions` e `context`, que contém `canvasCursorAgentIds`. Devolve uma das strings `automation_parent_wake`, `quiet`, `canvas` ou `generic`.

| Ordem | Condição | Retorno |
| --- | --- | --- |
| 1 | Alguma completion pede o pai | `automation_parent_wake` |
| 2 | Todas possuem `quietOrigin` | `quiet` |
| 3 | Exatamente uma completion de canvas válida | `canvas` |
| 4 | Restante | `generic` |

A validade de canvas exige `status: "completed"`, tipo `cursor-agent`, ID reconhecido pelo contexto e resultado com caminho de canvas no user store. Um handoff explícito tem prioridade sobre origem quiet e canvas. [Helpers](../../../reference/runtime/sand-eval-runner.cjs#L583887-L583902).

## Como o resultado é usado

`buildSubagentRevival` monta o prompt, computa delegações assentadas e acrescenta `namesResultDelivery` quando há handoff ou origem em sala. Só acrescenta `quiet: true` ou `canvas: true` no respectivo caso. [Implementação](../../../reference/runtime/sand-eval-runner.cjs#L583924-L583936).

`buildSubagentRevivalPrompt` produz um bloco por completion, com título, resultado, origem quiet, sala e atraso quando existem. Escolhe uma instrução especializada para handoffs retidos se todos os handoffs do lote estão atrasados. Acrescenta uma nota de obsolescência se algum resultado foi retido, exceto no caminho canvas; no caminho generic, resultados de computer-use recebem uma restrição de redispatch. [Implementação](../../../reference/runtime/sand-eval-runner.cjs#L583957-L584007).

## Política de silêncio e de atraso

O prompt quiet pede uma comunicação única para mudança concreta, resultado novo acionável ou bloqueio relevante; para ausência de novidade, pede encerramento silencioso. O prompt generic permite ignorar resultado irrelevante, duplicado ou já resolvido quando o usuário não o aguardava. O prompt held exige reavaliar atualidade e evitar misturar resultado atrasado com outro assunto. [Instruções](../../../reference/runtime/sand-eval-runner.cjs#L583872-L583885), [generic](../../../reference/runtime/sand-eval-runner.cjs#L583950-L583956).

Essas são instruções comportamentais. Esta função não lê o conteúdo para calcular “novidade”, não consulta preferências e não usa um score ou threshold. O campo `heldForMs` é evidência fornecida ao prompt, não uma expiração automática.

## Casos de leitura

| Lote | Escolha |
| --- | --- |
| Resultado quiet com `parentWakeRequested: true` | Handoff explícito vence |
| Dois resultados quiet, sem pedido ao pai | Quiet |
| Um canvas e um resultado comum | Generic, porque canvas exige tamanho 1 |
| Resultado aguardado sem origem quiet nem sala | Generic; o helper `owesSubagentRevivalReply` pode registrar resposta devida |
| Lote vazio | `every` é verdadeiro, portanto retorna quiet; o helper não rejeita vazio |

O último caso descreve a semântica literal da função, sem afirmar que um caller produz lotes vazios em produção. `revivalRunLength` separa sequências aguardadas e não aguardadas antes de compor lotes; cursor-agents não mudam essa transição. [Helpers](../../../reference/runtime/sand-eval-runner.cjs#L583898-L583923).

[Proatividade](../../components/proactivity/README.md) · [Background wakes](../../components/background-wakes/README.md).
