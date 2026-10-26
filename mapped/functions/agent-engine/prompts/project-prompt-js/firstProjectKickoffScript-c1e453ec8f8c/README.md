# `firstProjectKickoffScript`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:641132-641142](../../../../../../reference/runtime/host-main.cjs#L641132-L641142) | `FunctionDeclaration` | não | `sendMessageToolName` |
| [evaluation:431745-431755](../../../../../../reference/runtime/sand-eval-runner.cjs#L431745-L431755) | `FunctionDeclaration` | não | `sendMessageToolName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641132-641142](../../../../../../reference/runtime/host-main.cjs#L641132-L641142) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431745-431755](../../../../../../reference/runtime/sand-eval-runner.cjs#L431745-L431755) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:641132

Chamadas escritas diretamente neste corpo: `sendMessageToolName.trim`.

SHA-256 do trecho: `dc22f7937b97391ffc9906bb46f1a7cc03133e6d529ee9994d9edb421992c3fc`.

### evaluation:431745

Chamadas escritas diretamente neste corpo: `sendMessageToolName.trim`.

SHA-256 do trecho: `dc22f7937b97391ffc9906bb46f1a7cc03133e6d529ee9994d9edb421992c3fc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
