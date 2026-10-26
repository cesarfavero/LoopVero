# `TokenRefreshingSpanExporter.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/host-tracing.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/host-tracing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731581-731587](../../../../../../../reference/runtime/host-main.cjs#L731581-L731587) | `method` | não | `url2, getToken, baseHeaders, insecure, reportHostLog` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731581-731587](../../../../../../../reference/runtime/host-main.cjs#L731581-L731587) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:731581

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `this.baseHeaders`, `this.getToken`, `this.insecure`, `this.reportHostLog`, `this.url`.

SHA-256 do trecho: `83a6e816c79c4c8e4c7fb58bbeca10bb69e4a1656f36638c67c6be31ea823164`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
