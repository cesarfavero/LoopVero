# `countFailedBrowserToolCalls`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/failed-browser-tool-calls.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/failed-browser-tool-calls-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776108-776124](../../../../../../../../reference/runtime/host-main.cjs#L776108-L776124) | `FunctionDeclaration` | não | `tool, recordFailure` |
| [evaluation:575764-575780](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575764-L575780) | `FunctionDeclaration` | não | `tool, recordFailure` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776108-776124](../../../../../../../../reference/runtime/host-main.cjs#L776108-L776124) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:575764-575780](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575764-L575780) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:776108

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `2774cca7e39b51b1661e0cb3e4c751b2ec8ab9d42578a955bbde458447598490`.

### evaluation:575764

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `98bda64fd8fbbfaa458d102c0277d2cea92a70e587a4a6cc11608b0472386fe3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
