# `indexFacts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-sort-memories-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-sort-memories-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754243-754245](../../../../../../../reference/runtime/host-main.cjs#L754243-L754245) | `FunctionDeclaration` | não | `store` |
| [evaluation:536711-536713](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536711-L536713) | `FunctionDeclaration` | não | `store` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754243-754245](../../../../../../../reference/runtime/host-main.cjs#L754243-L754245) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536711-536713](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536711-L536713) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754243

Chamadas escritas diretamente neste corpo: `.map`, `new Map`, `store.listMemories`.

SHA-256 do trecho: `5149841912ef17722c4e0d260c29971aadb4c3c8baae472ba59aa1e9f3a035b6`.

### evaluation:536711

Chamadas escritas diretamente neste corpo: `.map`, `new Map`, `store.listMemories`.

SHA-256 do trecho: `21e8440299f5d5c39ee5b93d97168a8810146ec2d28a10dd3a7312888038ee50`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
