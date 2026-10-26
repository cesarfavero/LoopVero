# `shellRewatchPollMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/background-work.ts` · [README do módulo](../../../../../modules/core/runner/background-work-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:590195-590202](../../../../../../reference/runtime/host-main.cjs#L590195-L590202) | `FunctionDeclaration` | não | `(nenhum)` |
| [evaluation:490455-490462](../../../../../../reference/runtime/sand-eval-runner.cjs#L490455-L490462) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:590195-590202](../../../../../../reference/runtime/host-main.cjs#L590195-L590202) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:490455-490462](../../../../../../reference/runtime/sand-eval-runner.cjs#L490455-L490462) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:590195

Chamadas escritas diretamente neste corpo: `Number.isFinite`, `Number.parseInt`, `raw.trim`.

SHA-256 do trecho: `db0cd86005b6aa1f5b5854097d92cf926d4ebf4eb685a11ff45f8180bb146b11`.

### evaluation:490455

Chamadas escritas diretamente neste corpo: `Number.isFinite`, `Number.parseInt`, `raw.trim`.

SHA-256 do trecho: `1e2084d7bfe29600bf7799da0a7823ce481ab2c6cd44581c165903b285f213fa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
