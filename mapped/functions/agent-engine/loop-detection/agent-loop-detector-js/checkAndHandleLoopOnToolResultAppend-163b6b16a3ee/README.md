# `checkAndHandleLoopOnToolResultAppend`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:311412-311496](../../../../../../reference/runtime/sand-eval-runner.cjs#L311412-L311496) | `FunctionDeclaration` | não | `params` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:311412-311496](../../../../../../reference/runtime/sand-eval-runner.cjs#L311412-L311496) | 8 | 1 | 0 | 6 | 0 | 0 |

### evaluation:311412

Chamadas escritas diretamente neste corpo: `applyNudge`, `checkForAgentMessageLooping`, `checkForAgentOutboundMessageFlood`, `convertCoreMessagesToLoopFormat`, `currentMessages.slice`.

Alvos de atribuição ou incremento: `i`, `lastAssistantIndex`.

SHA-256 do trecho: `c1e32696862c35a5363689137dda04171c6756f2f5dbe161f4b360e1e4c7fccf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
