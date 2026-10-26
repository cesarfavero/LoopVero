# `matchesBodyWords`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-email-html.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732506-732517](../../../../../../../reference/runtime/host-main.cjs#L732506-L732517) | `FunctionDeclaration` | não | `html, body` |
| [evaluation:539518-539529](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539518-L539529) | `FunctionDeclaration` | não | `html, body` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732506-732517](../../../../../../../reference/runtime/host-main.cjs#L732506-L732517) | 2 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:539518-539529](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539518-L539529) | 2 | 2 | 0 | 1 | 0 | 0 |

### host:732506

Chamadas escritas diretamente neste corpo: `new Set`, `next.add`, `reachable.has`.

Alvos de atribuição ou incremento: `reachable`.

SHA-256 do trecho: `747277d0ff6f68956e978a0dc2bcb56c8da6619b2a815d5ff7491d7651ff81dd`.

### evaluation:539518

Chamadas escritas diretamente neste corpo: `new Set`, `next.add`, `reachable.has`.

Alvos de atribuição ou incremento: `reachable`.

SHA-256 do trecho: `747277d0ff6f68956e978a0dc2bcb56c8da6619b2a815d5ff7491d7651ff81dd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
