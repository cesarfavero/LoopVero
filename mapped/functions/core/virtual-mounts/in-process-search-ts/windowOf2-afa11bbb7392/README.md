# `windowOf2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/virtual-mounts/in-process-search.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/in-process-search-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766060-766076](../../../../../../reference/runtime/host-main.cjs#L766060-L766076) | `FunctionDeclaration` | não | `items, window2, defaultLimit` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766060-766076](../../../../../../reference/runtime/host-main.cjs#L766060-L766076) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:766060

Chamadas escritas diretamente neste corpo: `Math.ceil`, `Math.max`, `Math.min`, `items.slice`.

Alvos de atribuição ou incremento: `end`.

SHA-256 do trecho: `f8468a884a91ce67ad4a8fb35276a5ab975adcbb90eb8d4ad8d9a43b95b0bf70`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
