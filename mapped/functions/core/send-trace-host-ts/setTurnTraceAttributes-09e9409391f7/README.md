# `setTurnTraceAttributes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/send-trace-host.ts` · [README do módulo](../../../../modules/core/send-trace-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:528767-528777](../../../../../reference/runtime/sand-eval-runner.cjs#L528767-L528777) | `FunctionDeclaration` | não | `trace2, attributes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528767-528777](../../../../../reference/runtime/sand-eval-runner.cjs#L528767-L528777) | 1 | 1 | 0 | 1 | 0 | 1 |

### evaluation:528767

Chamadas escritas diretamente neste corpo: `Object.entries`, `errorLogTag`, `process.stderr.write`, `trace2.span.setAttribute`.

SHA-256 do trecho: `07ad7f48c2629b17d4cc1a55964eb3480a605f8aaad039f9ad513be7df5b154f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
