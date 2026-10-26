# `SettingsService.getSelectedTeamIdForAccountScope`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/settings/settings-service.ts` · [README do módulo](../../../../../../modules/host/extensions/settings/settings-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:728742-728745](../../../../../../../reference/runtime/host-main.cjs#L728742-L728745) | `method` | não | `accountScope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728742-728745](../../../../../../../reference/runtime/host-main.cjs#L728742-L728745) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:728742

Chamadas escritas diretamente neste corpo: `this.store.getSelectedTeam`.

SHA-256 do trecho: `6c1b19e60ba2cc92425f69172d88c8983e805edd1c6921243d650df1b2914f9b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
