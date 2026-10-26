# `OnePasswordBrokerService.createAccessRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:550841-550953](../../../../../../../reference/runtime/host-main.cjs#L550841-L550953) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550841-550953](../../../../../../../reference/runtime/host-main.cjs#L550841-L550953) | 11 | 1 | 7 | 6 | 0 | 0 |

### host:550841

Chamadas escritas diretamente neste corpo: `.requests.set`, `createOn`, `created.result.accessRequest.entries.map`, `fail3`, `failFresh`, `fresh.push`, `new Set`, `reused.push`, `reusedEntryIds.add`, `reusedEntryIds.has`, `this.agent`, `this.grants.dropExpired`, `this.grants.forWebsite`, `this.now`, `this.options.audit`, `this.options.log`, `this.pickOrStartCdpPort`, `this.sessionMaterial`, `this.windowFor`, `unavailableDiagnostics`, `validateInput`.

Alvos de atribuição ou incremento: `cdpPort`, `created`.

SHA-256 do trecho: `2efc644dd2a799801afcb7710fc682a17b5231cb30c6de6f95f6102e853ee177`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
