# `exactTextMatches`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/virtual-mounts/in-process-search.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/in-process-search-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765998-766001](../../../../../../reference/runtime/host-main.cjs#L765998-L766001) | `FunctionDeclaration` | não | `docs, query2, limit3, order` |
| [evaluation:559362-559365](../../../../../../reference/runtime/sand-eval-runner.cjs#L559362-L559365) | `FunctionDeclaration` | não | `docs, query2, limit3, order` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765998-766001](../../../../../../reference/runtime/host-main.cjs#L765998-L766001) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559362-559365](../../../../../../reference/runtime/sand-eval-runner.cjs#L559362-L559365) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:765998

Chamadas escritas diretamente neste corpo: `.map`, `.slice`, `.sort`, `docs.filter`, `query2.toLowerCase`.

SHA-256 do trecho: `9512dec0d5ea579cad8819a22f5d6b2c1f09db26ac3fc6ca8134bde260140cb3`.

### evaluation:559362

Chamadas escritas diretamente neste corpo: `.map`, `.slice`, `.sort`, `docs.filter`, `query2.toLowerCase`.

SHA-256 do trecho: `9512dec0d5ea579cad8819a22f5d6b2c1f09db26ac3fc6ca8134bde260140cb3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
