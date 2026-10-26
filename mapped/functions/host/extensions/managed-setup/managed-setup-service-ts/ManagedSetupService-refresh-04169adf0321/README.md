# `ManagedSetupService.refresh`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/managed-setup/managed-setup-service.ts` · [README do módulo](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683527-683576](../../../../../../../reference/runtime/host-main.cjs#L683527-L683576) | `method` | não | `force = false` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683527-683576](../../../../../../../reference/runtime/host-main.cjs#L683527-L683576) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:683527

Chamadas escritas diretamente neste corpo: `.finally`, `Promise.resolve`, `run`.

Alvos de atribuição ou incremento: `this.refreshForceQueued`, `this.refreshInFlight`, `this.refreshQueued`.

SHA-256 do trecho: `837eb3cdaae0e05237e992a764271a3196b7b330c1e861029e8287ff0d83d357`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
