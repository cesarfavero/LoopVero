# `build`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/turn-builders/subagent-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/subagent-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781147-781205](../../../../../../../../reference/runtime/host-main.cjs#L781147-L781205) | `ArrowFunctionExpression` | não | `{     host,     turn,     props,     extractAutoReviewConversationContext: extractAutoReviewConversationContext3   }, built` |
| [evaluation:581494-581552](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581494-L581552) | `ArrowFunctionExpression` | não | `{     host,     turn,     props,     extractAutoReviewConversationContext: extractAutoReviewConversationContext3   }, built` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781147-781205](../../../../../../../../reference/runtime/host-main.cjs#L781147-L781205) | 4 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:581494-581552](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581494-L581552) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:781147

Chamadas escritas diretamente neste corpo: `built.some`, `createSubagentManagementTools`, `detached.stopDelegatedWork.bind`, `sandSubagentToolName`.

SHA-256 do trecho: `dabde6c781748c64a46da7fc2b228bf621c232deeef498ebaa7e774b57dae768`.

### evaluation:581494

Chamadas escritas diretamente neste corpo: `built.some`, `createSubagentManagementTools`, `detached.stopDelegatedWork.bind`, `sandSubagentToolName`.

SHA-256 do trecho: `dabde6c781748c64a46da7fc2b228bf621c232deeef498ebaa7e774b57dae768`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
