# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706411-706473](../../../../../../../reference/runtime/host-main.cjs#L706411-L706473) | `ArrowFunctionExpression` | sim | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706411-706473](../../../../../../../reference/runtime/host-main.cjs#L706411-L706473) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:706411

Chamadas escritas diretamente neste corpo: `context2.onStop`, `createOrbitDaemonClient`, `createOrbitDaemonProxySupervisor`, `createOrbitDaemonSessionController`, `createOrbitService`, `createPollingPolicy2`, `createRetryPolicy`, `service.start`.

SHA-256 do trecho: `1717c323337bd5d6c7a260440f26088ad7f61c37e64f7b333e8d4bf412b0e9b2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
