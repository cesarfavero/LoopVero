# `createSandCodebaseTelemetryHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/codebase-telemetry/codebase-telemetry-host.ts` · [README do módulo](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:540858-540904](../../../../../../../reference/runtime/host-main.cjs#L540858-L540904) | `FunctionDeclaration` | não | `{   auth: auth2,   privacyMode,   createAdapter,   logger: logger132 }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540858-540904](../../../../../../../reference/runtime/host-main.cjs#L540858-L540904) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:540858

Chamadas escritas diretamente neste corpo: `createAuthSource`, `createPrivacyModeSource`, `disposables.add`, `new DisposableStore`.

SHA-256 do trecho: `58535e07a00b15f4d0f72dd6bdabbb7f3b12076498e853ad503a65d57a318e92`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
