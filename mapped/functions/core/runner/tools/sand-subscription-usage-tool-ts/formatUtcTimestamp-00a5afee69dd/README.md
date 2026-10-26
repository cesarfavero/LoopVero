# `formatUtcTimestamp`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-subscription-usage-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-subscription-usage-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766589-766591](../../../../../../../reference/runtime/host-main.cjs#L766589-L766591) | `FunctionDeclaration` | não | `ms2` |
| [evaluation:562102-562104](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562102-L562104) | `FunctionDeclaration` | não | `ms2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766589-766591](../../../../../../../reference/runtime/host-main.cjs#L766589-L766591) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:562102-562104](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562102-L562104) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:766589

Chamadas escritas diretamente neste corpo: `.replace`, `.toISOString`, `new Date`.

SHA-256 do trecho: `89a146fa0d30c2532c5937f1e130fb7ab165e4e56c6fc2a02a52c12cd6f49858`.

### evaluation:562102

Chamadas escritas diretamente neste corpo: `.replace`, `.toISOString`, `new Date`.

SHA-256 do trecho: `89a146fa0d30c2532c5937f1e130fb7ab165e4e56c6fc2a02a52c12cd6f49858`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
