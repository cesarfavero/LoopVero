# `partialToolCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/redacted-interaction-updates.js` · [README do módulo](../../../../modules/agent-core/redacted-interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:615678-615694](../../../../../reference/runtime/host-main.cjs#L615678-L615694) | `FunctionExpression` | não | `callId, toolCall2, modelCallId, argsTextDelta` |
| [evaluation:284398-284414](../../../../../reference/runtime/sand-eval-runner.cjs#L284398-L284414) | `FunctionExpression` | não | `callId, toolCall2, modelCallId, argsTextDelta` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615678-615694](../../../../../reference/runtime/host-main.cjs#L615678-L615694) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284398-284414](../../../../../reference/runtime/sand-eval-runner.cjs#L284398-L284414) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615678

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `940eeb9a43364a7b711048c6b79c4e4d5f33c9f546f69072c3e8a42b0a9300b5`.

### evaluation:284398

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `940eeb9a43364a7b711048c6b79c4e4d5f33c9f546f69072c3e8a42b0a9300b5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
