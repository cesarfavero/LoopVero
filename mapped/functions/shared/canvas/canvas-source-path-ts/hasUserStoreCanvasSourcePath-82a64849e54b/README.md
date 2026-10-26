# `hasUserStoreCanvasSourcePath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/canvas/canvas-source-path.ts` · [README do módulo](../../../../../modules/shared/canvas/canvas-source-path-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566754-566760](../../../../../../reference/runtime/sand-eval-runner.cjs#L566754-L566760) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566754-566760](../../../../../../reference/runtime/sand-eval-runner.cjs#L566754-L566760) | 2 | 1 | 0 | 3 | 0 | 0 |

### evaluation:566754

Chamadas escritas diretamente neste corpo: `parseCloudCanvasId`, `text3.includes`, `text3.matchAll`.

SHA-256 do trecho: `3ecb6b7d1fb1f353d2f8b977faabf8aaa5ac3db17111da351bc10371ac3b925f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
