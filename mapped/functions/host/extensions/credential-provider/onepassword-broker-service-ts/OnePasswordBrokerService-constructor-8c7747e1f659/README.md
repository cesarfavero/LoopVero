# `OnePasswordBrokerService.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:550632-550645](../../../../../../../reference/runtime/host-main.cjs#L550632-L550645) | `method` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550632-550645](../../../../../../../reference/runtime/host-main.cjs#L550632-L550645) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:550632

Chamadas escritas diretamente neste corpo: `createPollingPolicy2`, `createRetryPolicy`, `new BrokeredGrants`.

Alvos de atribuição ou incremento: `this.browserWorkerPoll`, `this.discoverPorts`, `this.grants`, `this.now`, `this.options`, `this.pendingPoll`, `this.statusRetry`.

SHA-256 do trecho: `bffe28d2c834e2908045c67ccf3dea1ff38e457923c03a9a13432e553f768928`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
