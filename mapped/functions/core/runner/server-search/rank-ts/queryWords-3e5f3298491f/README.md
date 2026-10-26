# `queryWords`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/server-search/rank.ts` · [README do módulo](../../../../../../modules/core/runner/server-search/rank-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765877-765879](../../../../../../../reference/runtime/host-main.cjs#L765877-L765879) | `FunctionDeclaration` | não | `query2, ignoreWords` |
| [evaluation:559241-559243](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559241-L559243) | `FunctionDeclaration` | não | `query2, ignoreWords` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765877-765879](../../../../../../../reference/runtime/host-main.cjs#L765877-L765879) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559241-559243](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559241-L559243) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:765877

Chamadas escritas diretamente neste corpo: `.filter`, `.match`, `.slice`, `new Set`, `normalizeCommandText`.

SHA-256 do trecho: `5fb26910e1121f3fa39d1313ce9dcfce14a09476775c2f9cba75974eb989fa66`.

### evaluation:559241

Chamadas escritas diretamente neste corpo: `.filter`, `.match`, `.slice`, `new Set`, `normalizeCommandText`.

SHA-256 do trecho: `5fb26910e1121f3fa39d1313ce9dcfce14a09476775c2f9cba75974eb989fa66`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
