# `UserFormService.fill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/user-form-service.ts` · [README do módulo](../../../../../../modules/host/extensions/session/user-form-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:728102-728140](../../../../../../../reference/runtime/host-main.cjs#L728102-L728140) | `method` | sim | `agentId, values, consentedHost, submitAfterFill` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728102-728140](../../../../../../../reference/runtime/host-main.cjs#L728102-L728140) | 2 | 0 | 2 | 3 | 0 | 1 |

### host:728102

Chamadas escritas diretamente neste corpo: `.includes`, `Object.values`, `createUserFormHostFillTiming`, `driverUnavailableFillResult`, `fillSandUserFormValues`, `observeUserFormDriverFailures`, `observed.firstFailureStage`, `reportFallback`, `this.createRunner`, `timing.finish`.

SHA-256 do trecho: `027bd32ec35ca218d8f46a6b0ddff3eb113d4849610c88781a065c5157d0fe97`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
