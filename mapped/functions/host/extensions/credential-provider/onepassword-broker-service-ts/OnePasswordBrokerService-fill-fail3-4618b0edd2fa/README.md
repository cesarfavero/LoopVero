# `OnePasswordBrokerService.fill/fail3`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:551079-551097](../../../../../../../reference/runtime/host-main.cjs#L551079-L551097) | `ArrowFunctionExpression` | não | `reason, {       targetUrl,       retryable = false,       detail = FILL_FAILURE_DETAIL[reason],       auditReason = auditReasonFor(reason),       extensionApi     } = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551079-551097](../../../../../../../reference/runtime/host-main.cjs#L551079-L551097) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:551079

Chamadas escritas diretamente neste corpo: `this.options.audit`.

SHA-256 do trecho: `8fc4b2108a06cc299c2767a3eee84634b268837585fe82f0cd78a52c436dae6d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
