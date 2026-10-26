# `formatTreeRun`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-snapshot-format.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742886-742890](../../../../../../reference/runtime/host-main.cjs#L742886-L742890) | `FunctionDeclaration` | não | `lines2, origin` |
| [evaluation:515548-515552](../../../../../../reference/runtime/sand-eval-runner.cjs#L515548-L515552) | `FunctionDeclaration` | não | `lines2, origin` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742886-742890](../../../../../../reference/runtime/host-main.cjs#L742886-L742890) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515548-515552](../../../../../../reference/runtime/sand-eval-runner.cjs#L515548-L515552) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742886

Chamadas escritas diretamente neste corpo: `collapseWrappers`, `parseTree2`, `renderTree`.

SHA-256 do trecho: `feb2604559c7dc654366c1926f058fa877407e88c150fc2835f7972f0ef415d5`.

### evaluation:515548

Chamadas escritas diretamente neste corpo: `collapseWrappers`, `parseTree2`, `renderTree`.

SHA-256 do trecho: `feb2604559c7dc654366c1926f058fa877407e88c150fc2835f7972f0ef415d5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
