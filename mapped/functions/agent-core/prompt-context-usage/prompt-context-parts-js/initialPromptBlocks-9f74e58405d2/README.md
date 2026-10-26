# `initialPromptBlocks`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476391-476398](../../../../../../reference/runtime/host-main.cjs#L476391-L476398) | `FunctionDeclaration` | não | `text3` |
| [evaluation:255701-255708](../../../../../../reference/runtime/sand-eval-runner.cjs#L255701-L255708) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476391-476398](../../../../../../reference/runtime/host-main.cjs#L476391-L476398) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255701-255708](../../../../../../reference/runtime/sand-eval-runner.cjs#L255701-L255708) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476391

Chamadas escritas diretamente neste corpo: `INITIAL_PROMPT_BLOCKS.flatMap`, `extractCompleteTagRanges`.

SHA-256 do trecho: `515b3b18567b66289dc3d2324a2d07e8f4a7004cb8c84e5cdbff358802e43dea`.

### evaluation:255701

Chamadas escritas diretamente neste corpo: `INITIAL_PROMPT_BLOCKS.flatMap`, `extractCompleteTagRanges`.

SHA-256 do trecho: `515b3b18567b66289dc3d2324a2d07e8f4a7004cb8c84e5cdbff358802e43dea`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
