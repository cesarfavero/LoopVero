# `SettingsService.noteSelectedTeamScopeSourceChanged`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/settings/settings-service.ts` · [README do módulo](../../../../../../modules/host/extensions/settings/settings-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:728701-728706](../../../../../../../reference/runtime/host-main.cjs#L728701-L728706) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728701-728706](../../../../../../../reference/runtime/host-main.cjs#L728701-L728706) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:728701

Chamadas escritas diretamente neste corpo: `this.announceChange`, `this.getSelectedTeamId`.

Alvos de atribuição ou incremento: `this.lastAnnouncedSelectedTeamId`.

SHA-256 do trecho: `628e70073b78287c98ba51fadc1786e02c41cae17f1fce6b4e28ba12163e269c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
