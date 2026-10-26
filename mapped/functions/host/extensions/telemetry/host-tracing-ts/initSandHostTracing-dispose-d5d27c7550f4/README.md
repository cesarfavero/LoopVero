# `initSandHostTracing/dispose`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/host-tracing.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/host-tracing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731699-731710](../../../../../../../reference/runtime/host-main.cjs#L731699-L731710) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731699-731710](../../../../../../../reference/runtime/host-main.cjs#L731699-L731710) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:731699

Chamadas escritas diretamente neste corpo: `process.off`, `provider.shutdown`.

Alvos de atribuição ou incremento: `disposed`.

SHA-256 do trecho: `52317376897a0447915993b70b2eed82ca942a9a2980fabb0effa436e09d196b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
