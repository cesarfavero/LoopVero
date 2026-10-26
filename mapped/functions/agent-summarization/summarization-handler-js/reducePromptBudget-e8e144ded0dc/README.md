# `reducePromptBudget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620944-620951](../../../../../reference/runtime/host-main.cjs#L620944-L620951) | `FunctionDeclaration` | não | `opts` |
| [evaluation:305298-305305](../../../../../reference/runtime/sand-eval-runner.cjs#L305298-L305305) | `FunctionDeclaration` | não | `opts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620944-620951](../../../../../reference/runtime/host-main.cjs#L620944-L620951) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:305298-305305](../../../../../reference/runtime/sand-eval-runner.cjs#L305298-L305305) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:620944

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.max`, `Math.min`.

Alvos de atribuição ou incremento: `next`.

SHA-256 do trecho: `2123251ba04c1c1ca0f7e86bcbebc8cce21138a091bf9e5ae70bc0c98f27bafe`.

### evaluation:305298

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.max`, `Math.min`.

Alvos de atribuição ou incremento: `next`.

SHA-256 do trecho: `2123251ba04c1c1ca0f7e86bcbebc8cce21138a091bf9e5ae70bc0c98f27bafe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
