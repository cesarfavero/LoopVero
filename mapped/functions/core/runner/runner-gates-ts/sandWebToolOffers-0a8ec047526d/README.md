# `sandWebToolOffers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/runner-gates.ts` · [README do módulo](../../../../../modules/core/runner/runner-gates-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:752511-752516](../../../../../../reference/runtime/host-main.cjs#L752511-L752516) | `FunctionDeclaration` | não | `gates` |
| [evaluation:530921-530926](../../../../../../reference/runtime/sand-eval-runner.cjs#L530921-L530926) | `FunctionDeclaration` | não | `gates` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752511-752516](../../../../../../reference/runtime/host-main.cjs#L752511-L752516) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:530921-530926](../../../../../../reference/runtime/sand-eval-runner.cjs#L530921-L530926) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:752511

Chamadas escritas diretamente neste corpo: `gates.webFetchDisabled`, `gates.webSearchDisabled`, `gates.webSearchDisabledByTeamNetwork`.

SHA-256 do trecho: `eae84dd4b0838d0ce05bd668fa9b56763f1a310b09f533ebf09f962efafcef87`.

### evaluation:530921

Chamadas escritas diretamente neste corpo: `gates.webFetchDisabled`, `gates.webSearchDisabled`, `gates.webSearchDisabledByTeamNetwork`.

SHA-256 do trecho: `eae84dd4b0838d0ce05bd668fa9b56763f1a310b09f533ebf09f962efafcef87`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
