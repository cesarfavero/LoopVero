# `rangesOutsideTagBlocks`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-blocks.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-blocks-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476178-476191](../../../../../../reference/runtime/host-main.cjs#L476178-L476191) | `FunctionDeclaration` | não | `text3, matchesStrippedTag` |
| [evaluation:255488-255501](../../../../../../reference/runtime/sand-eval-runner.cjs#L255488-L255501) | `FunctionDeclaration` | não | `text3, matchesStrippedTag` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476178-476191](../../../../../../reference/runtime/host-main.cjs#L476178-L476191) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:255488-255501](../../../../../../reference/runtime/sand-eval-runner.cjs#L255488-L255501) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:476178

Chamadas escritas diretamente neste corpo: `extractCompleteTagRangesMatching`, `kept.push`, `selectOutermostRanges`.

Alvos de atribuição ou incremento: `cursor`.

SHA-256 do trecho: `e42de36a0402c368f8ef1545eb6f24b25b7f73e9f8bec272774c85abbe936faa`.

### evaluation:255488

Chamadas escritas diretamente neste corpo: `extractCompleteTagRangesMatching`, `kept.push`, `selectOutermostRanges`.

Alvos de atribuição ou incremento: `cursor`.

SHA-256 do trecho: `e42de36a0402c368f8ef1545eb6f24b25b7f73e9f8bec272774c85abbe936faa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
