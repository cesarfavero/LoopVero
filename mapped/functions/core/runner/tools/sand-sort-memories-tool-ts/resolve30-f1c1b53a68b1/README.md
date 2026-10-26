# `resolve30`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-sort-memories-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-sort-memories-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754246-754266](../../../../../../../reference/runtime/host-main.cjs#L754246-L754266) | `FunctionDeclaration` | não | `{   facts,   from: from2,   settledIn }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754246-754266](../../../../../../../reference/runtime/host-main.cjs#L754246-L754266) | 4 | 1 | 0 | 1 | 0 | 0 |

### host:754246

Chamadas escritas diretamente neste corpo: `destination.get`, `destination.has`, `found.set`, `found.values`, `indexFacts`, `memoryIdFor`, `missing.push`, `new Map`, `settled.set`, `settled.values`, `source.get`, `source.has`.

SHA-256 do trecho: `fb2f5f20ba8253f4acaa8a6dc4df862b4a4a844b11a483cc4ff1aa2ebcf72150`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
