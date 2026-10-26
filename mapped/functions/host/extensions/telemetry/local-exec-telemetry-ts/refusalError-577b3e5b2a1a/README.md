# `refusalError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/local-exec-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/local-exec-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:472076-472089](../../../../../../../reference/runtime/host-main.cjs#L472076-L472089) | `FunctionDeclaration` | não | `cause` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472076-472089](../../../../../../../reference/runtime/host-main.cjs#L472076-L472089) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:472076

Chamadas escritas diretamente neste corpo: `SandError.localExecComputerAmbiguous`, `SandError.localExecComputerUnknown`, `SandError.localExecMessagesUnsupported`, `SandError.localExecNoProviders`, `SandError.localExecProvidersStale`.

SHA-256 do trecho: `feac98681a411594e932be10e75e4461ce09430dd646f405ed88f6e4985a9bd2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
