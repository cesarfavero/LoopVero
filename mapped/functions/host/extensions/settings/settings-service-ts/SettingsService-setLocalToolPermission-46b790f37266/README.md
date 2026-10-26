# `SettingsService.setLocalToolPermission`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/settings/settings-service.ts` · [README do módulo](../../../../../../modules/host/extensions/settings/settings-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:728746-728752](../../../../../../../reference/runtime/host-main.cjs#L728746-L728752) | `method` | não | `permission, machineId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728746-728752](../../../../../../../reference/runtime/host-main.cjs#L728746-L728752) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:728746

Chamadas escritas diretamente neste corpo: `this.store.setLocalToolPermission`, `this.store.setLocalToolPermissionForMachine`.

SHA-256 do trecho: `dff66905cb204958b7f0fd8d25c52dfcd053b3218b536f5e109003f73a9697b2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
