# `firstPageOn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-takeover.ts` · [README do módulo](../../../../../modules/core/box/box-takeover-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775948-775954](../../../../../../reference/runtime/host-main.cjs#L775948-L775954) | `FunctionDeclaration` | não | `pages, keys, keyOf` |
| [evaluation:575605-575611](../../../../../../reference/runtime/sand-eval-runner.cjs#L575605-L575611) | `FunctionDeclaration` | não | `pages, keys, keyOf` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775948-775954](../../../../../../reference/runtime/host-main.cjs#L775948-L775954) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:575605-575611](../../../../../../reference/runtime/sand-eval-runner.cjs#L575605-L575611) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:775948

Chamadas escritas diretamente neste corpo: `pages.find`.

SHA-256 do trecho: `a9ad0d6e527645251ee56bcd05b5ee1f2e76fe9500b46d153960514cf359dd17`.

### evaluation:575605

Chamadas escritas diretamente neste corpo: `pages.find`.

SHA-256 do trecho: `a9ad0d6e527645251ee56bcd05b5ee1f2e76fe9500b46d153960514cf359dd17`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
