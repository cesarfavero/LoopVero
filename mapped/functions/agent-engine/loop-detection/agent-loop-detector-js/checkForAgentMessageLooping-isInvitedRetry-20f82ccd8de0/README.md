# `checkForAgentMessageLooping/isInvitedRetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:311258-311260](../../../../../../reference/runtime/sand-eval-runner.cjs#L311258-L311260) | `FunctionDeclaration` | não | `msg` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:311258-311260](../../../../../../reference/runtime/sand-eval-runner.cjs#L311258-L311260) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:311258

Chamadas escritas diretamente neste corpo: `msg.toolResultTexts.some`.

SHA-256 do trecho: `8b2be3f2a45bf11712c46604c0772e7557c7874f104a242b3d39490ec1dc5a99`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
