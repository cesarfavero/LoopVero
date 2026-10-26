# `shellQuote`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-mcp-manifest.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-mcp-manifest-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:693565-693567](../../../../../../reference/runtime/host-main.cjs#L693565-L693567) | `FunctionDeclaration` | não | `value` |
| [evaluation:514859-514861](../../../../../../reference/runtime/sand-eval-runner.cjs#L514859-L514861) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693565-693567](../../../../../../reference/runtime/host-main.cjs#L693565-L693567) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514859-514861](../../../../../../reference/runtime/sand-eval-runner.cjs#L514859-L514861) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:693565

Chamadas escritas diretamente neste corpo: `value.replaceAll`.

SHA-256 do trecho: `c977a40b910ceafc48255348aef2792f7a4c00d181bc05aa10c61302a7497c5f`.

### evaluation:514859

Chamadas escritas diretamente neste corpo: `value.replaceAll`.

SHA-256 do trecho: `c977a40b910ceafc48255348aef2792f7a4c00d181bc05aa10c61302a7497c5f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
