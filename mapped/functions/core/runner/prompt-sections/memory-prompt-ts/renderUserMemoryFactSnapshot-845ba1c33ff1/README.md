# `renderUserMemoryFactSnapshot`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/prompt-sections/memory-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538041-538076](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538041-L538076) | `FunctionDeclaration` | não | `recall2, ctx, shownFacts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538041-538076](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538041-L538076) | 4 | 0 | 0 | 1 | 0 | 0 |

### evaluation:538041

Chamadas escritas diretamente neste corpo: `appendBudgetedProvenancedFacts`, `lines2.join`, `lines2.push`.

SHA-256 do trecho: `3d33e71ea694a691084ba2412049aa26123cd5c2a0b3735134fb32d262c3417c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
