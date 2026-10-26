# `createCodebaseTelemetryService`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/codebase-telemetry/codebase-telemetry-service.ts` · [README do módulo](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:540987-541088](../../../../../../../reference/runtime/host-main.cjs#L540987-L541088) | `FunctionDeclaration` | não | `{   auth: auth2,   createAdapter,   privacyMode,   policies: policies2,   logger: logger132 }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540987-541088](../../../../../../../reference/runtime/host-main.cjs#L540987-L541088) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:540987

Chamadas escritas diretamente neste corpo: `createSandCodebaseTelemetryHost`, `new CodebaseSnapshotTrigger`, `new CodebaseTelemetryController`.

Alvos de atribuição ou incremento: `controller`.

SHA-256 do trecho: `a61d95b6a18f5f72f7d2e2464c54cdd6c30761a9491404975981619e603a5152`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
