# `visitValue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476345-476365](../../../../../../reference/runtime/host-main.cjs#L476345-L476365) | `FunctionDeclaration` | não | `scope, value` |
| [evaluation:255655-255675](../../../../../../reference/runtime/sand-eval-runner.cjs#L255655-L255675) | `FunctionDeclaration` | não | `scope, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476345-476365](../../../../../../reference/runtime/host-main.cjs#L476345-L476365) | 5 | 2 | 0 | 2 | 0 | 0 |
| [evaluation:255655-255675](../../../../../../reference/runtime/sand-eval-runner.cjs#L255655-L255675) | 5 | 2 | 0 | 2 | 0 | 0 |

### host:476345

Chamadas escritas diretamente neste corpo: `extractCompleteTagRangesMatching`, `initialPromptBlocks`, `rangesOutsideTagBlocks`, `selectOutermostRanges`, `visitPart`, `wholeText`.

SHA-256 do trecho: `35654968fce18c17e88c0061eca20c4c73532e36f422cf25bb7d533b2bda42a9`.

### evaluation:255655

Chamadas escritas diretamente neste corpo: `extractCompleteTagRangesMatching`, `initialPromptBlocks`, `rangesOutsideTagBlocks`, `selectOutermostRanges`, `visitPart`, `wholeText`.

SHA-256 do trecho: `35654968fce18c17e88c0061eca20c4c73532e36f422cf25bb7d533b2bda42a9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
