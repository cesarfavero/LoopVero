# `selectRelevantMemories`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/sand-memory.ts` · [README do módulo](../../../../../modules/core/runner/sand-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:536302-536315](../../../../../../reference/runtime/sand-eval-runner.cjs#L536302-L536315) | `FunctionDeclaration` | não | `query2, memories, max` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536302-536315](../../../../../../reference/runtime/sand-eval-runner.cjs#L536302-L536315) | 4 | 2 | 0 | 3 | 0 | 0 |

### evaluation:536302

Chamadas escritas diretamente neste corpo: `.map`, `.slice`, `queryTokens.has`, `relevanceTokens`, `scored.push`, `scored.sort`.

Alvos de atribuição ou incremento: `overlap`.

SHA-256 do trecho: `a944bae3041627e9b062408a4a580ea0b6a42d0d00374551f8fa4fadd3e66074`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
