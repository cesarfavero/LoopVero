# `withholdLoopingOutboundToolArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/outbound-message-loop.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/outbound-message-loop-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:436468-436489](../../../../../../reference/runtime/sand-eval-runner.cjs#L436468-L436489) | `FunctionDeclaration` | não | `ctx, policy, toolName, argsStream` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:436468-436489](../../../../../../reference/runtime/sand-eval-runner.cjs#L436468-L436489) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:436468

Chamadas escritas diretamente neste corpo: `getAgentLoopRuntime`, `policy.isOutboundMessageTool`.

SHA-256 do trecho: `ebd425cf604b37c857fce3664c76eaa1c69c0be87e7b3440aa0a1d22d958307b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
