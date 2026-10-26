# `OnePasswordBrokerService.fill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:551078-551194](../../../../../../../reference/runtime/host-main.cjs#L551078-L551194) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551078-551194](../../../../../../../reference/runtime/host-main.cjs#L551078-L551194) | 18 | 0 | 10 | 13 | 0 | 0 |

### host:551078

Chamadas escritas diretamente neste corpo: `.find`, `activeTabs.filter`, `asyncMapValues`, `browserWindowIndexOfCdpPort`, `fail3`, `new URL`, `onSite.filter`, `ports.filter`, `reportsStaleReference`, `resolved.flatMap`, `resolved.some`, `this.discoverPorts`, `this.grants.dropExpired`, `this.grants.get`, `this.grants.remove`, `this.grantsReady`, `this.now`, `this.options.audit`, `this.options.leasedFill.run`, `this.sessionMaterial`, `this.windowFor`, `unavailableDiagnostics`.

Alvos de atribuição ou incremento: `material`.

SHA-256 do trecho: `aa2307b9a163bfdcb024fee5876dcd725e3820d12831f91abe96a9a611022c7e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
