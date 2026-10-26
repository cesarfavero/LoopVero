# `isSlackV1_5ThreadBoundSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/claude-helpers.js` · [README do módulo](../../../../../modules/agent-engine/prompts/claude-helpers-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:635560-635566](../../../../../../reference/runtime/host-main.cjs#L635560-L635566) | `FunctionDeclaration` | não | `props` |
| [evaluation:423618-423624](../../../../../../reference/runtime/sand-eval-runner.cjs#L423618-L423624) | `FunctionDeclaration` | não | `props` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:635560-635566](../../../../../../reference/runtime/host-main.cjs#L635560-L635566) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:423618-423624](../../../../../../reference/runtime/sand-eval-runner.cjs#L423618-L423624) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:635560

Chamadas escritas diretamente neste corpo: `props.namedAgentSessionKind.trim`.

SHA-256 do trecho: `d0034a63d1e3057e49901ba7fdfe004c2eed3caf43182582b4c5698b0cbcf50a`.

### evaluation:423618

Chamadas escritas diretamente neste corpo: `props.namedAgentSessionKind.trim`.

SHA-256 do trecho: `d0034a63d1e3057e49901ba7fdfe004c2eed3caf43182582b4c5698b0cbcf50a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
