# `msUntilLimit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shell-terminal-outcome.ts` · [README do módulo](../../../../../modules/core/box/shell-terminal-outcome-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:590253-590255](../../../../../../reference/runtime/host-main.cjs#L590253-L590255) | `FunctionDeclaration` | não | `{ startedAtMs, limitMs }` |
| [evaluation:529976-529978](../../../../../../reference/runtime/sand-eval-runner.cjs#L529976-L529978) | `FunctionDeclaration` | não | `{ startedAtMs, limitMs }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:590253-590255](../../../../../../reference/runtime/host-main.cjs#L590253-L590255) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:529976-529978](../../../../../../reference/runtime/sand-eval-runner.cjs#L529976-L529978) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:590253

Chamadas escritas diretamente neste corpo: `Date.now`, `Math.max`.

SHA-256 do trecho: `f1997ebe549f43c03c9a04647f042d38ed2e4b2cf6fdf2f17c7d0cb38c325dcd`.

### evaluation:529976

Chamadas escritas diretamente neste corpo: `Date.now`, `Math.max`.

SHA-256 do trecho: `f1997ebe549f43c03c9a04647f042d38ed2e4b2cf6fdf2f17c7d0cb38c325dcd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
