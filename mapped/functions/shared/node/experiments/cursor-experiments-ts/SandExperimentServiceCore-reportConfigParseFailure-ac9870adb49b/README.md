# `SandExperimentServiceCore.reportConfigParseFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552955-552961](../../../../../../../reference/runtime/host-main.cjs#L552955-L552961) | `method` | não | `name18, error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552955-552961](../../../../../../../reference/runtime/host-main.cjs#L552955-L552961) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:552955

Chamadas escritas diretamente neste corpo: `reportExperimentsDiagnostic`, `this.reportedParseFailures.add`, `this.reportedParseFailures.has`.

SHA-256 do trecho: `42b869b965c16219dd71c12833bd8e085af958ee9cf030aee45e45accfc29318`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
