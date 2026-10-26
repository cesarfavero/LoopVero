# `hostStartupTelemetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/lifecycle-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/lifecycle-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:471836-471845](../../../../../../../reference/runtime/host-main.cjs#L471836-L471845) | `FunctionDeclaration` | não | `metadata2, hostBuiltAtMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471836-471845](../../../../../../../reference/runtime/host-main.cjs#L471836-L471845) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:471836

Chamadas escritas diretamente neste corpo: `brandedId`, `logFields`.

SHA-256 do trecho: `b8dc2481af959e448f3f4369d857f2b037bd98dce946eeed8c082b3aa4a46884`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
