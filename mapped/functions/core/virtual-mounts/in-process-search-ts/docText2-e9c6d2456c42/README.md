# `docText2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/virtual-mounts/in-process-search.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/in-process-search-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765971-765973](../../../../../../reference/runtime/host-main.cjs#L765971-L765973) | `FunctionDeclaration` | não | `doc` |
| [evaluation:559335-559337](../../../../../../reference/runtime/sand-eval-runner.cjs#L559335-L559337) | `FunctionDeclaration` | não | `doc` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765971-765973](../../../../../../reference/runtime/host-main.cjs#L765971-L765973) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559335-559337](../../../../../../reference/runtime/sand-eval-runner.cjs#L559335-L559337) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:765971

Chamadas escritas diretamente neste corpo: `.join`, `Object.values`.

SHA-256 do trecho: `fed00c0d3fa4bf4c7c37331c9aea9566946729d1982c3866863e488ea6ab7a96`.

### evaluation:559335

Chamadas escritas diretamente neste corpo: `.join`, `Object.values`.

SHA-256 do trecho: `fed00c0d3fa4bf4c7c37331c9aea9566946729d1982c3866863e488ea6ab7a96`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
