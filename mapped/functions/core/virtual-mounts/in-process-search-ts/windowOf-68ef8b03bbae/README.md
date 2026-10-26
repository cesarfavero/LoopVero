# `windowOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/virtual-mounts/in-process-search.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/in-process-search-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:559424-559440](../../../../../../reference/runtime/sand-eval-runner.cjs#L559424-L559440) | `FunctionDeclaration` | não | `items, window2, defaultLimit` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:559424-559440](../../../../../../reference/runtime/sand-eval-runner.cjs#L559424-L559440) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:559424

Chamadas escritas diretamente neste corpo: `Math.ceil`, `Math.max`, `Math.min`, `items.slice`.

Alvos de atribuição ou incremento: `end`.

SHA-256 do trecho: `38fd223f70aa89c5ce1bba5966687e53704d2e4024737d73a74f2cdb180c21c6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
