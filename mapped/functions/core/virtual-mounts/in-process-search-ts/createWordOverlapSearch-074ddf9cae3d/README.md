# `createWordOverlapSearch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/virtual-mounts/in-process-search.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/in-process-search-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766052-766059](../../../../../../reference/runtime/host-main.cjs#L766052-L766059) | `FunctionDeclaration` | não | `options2 = {}` |
| [evaluation:559416-559423](../../../../../../reference/runtime/sand-eval-runner.cjs#L559416-L559423) | `FunctionDeclaration` | não | `options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766052-766059](../../../../../../reference/runtime/host-main.cjs#L766052-L766059) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559416-559423](../../../../../../reference/runtime/sand-eval-runner.cjs#L559416-L559423) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:766052

Chamadas escritas diretamente neste corpo: `createInProcessSearch`, `createOverlapRanker`.

SHA-256 do trecho: `1780e36fdf1ef4979bf42a0ba4cbdca7175606302a61c426cd851964dc124ea2`.

### evaluation:559416

Chamadas escritas diretamente neste corpo: `createInProcessSearch`, `createOverlapRanker`.

SHA-256 do trecho: `1780e36fdf1ef4979bf42a0ba4cbdca7175606302a61c426cd851964dc124ea2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
