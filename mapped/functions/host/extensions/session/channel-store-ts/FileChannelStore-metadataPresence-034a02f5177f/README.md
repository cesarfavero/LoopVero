# `FileChannelStore.metadataPresence`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/channel-store.ts` · [README do módulo](../../../../../../modules/host/extensions/session/channel-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721304-721313](../../../../../../../reference/runtime/host-main.cjs#L721304-L721313) | `method` | não | `platform2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721304-721313](../../../../../../../reference/runtime/host-main.cjs#L721304-L721313) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:721304

Chamadas escritas diretamente neste corpo: `isMissingPathError`, `reportFallbackUnlessAbsent`, `this.configPath`, `this.stat`.

SHA-256 do trecho: `70b419977681e586782caa6c152a23a1e7c7d2b5eebf2f43fd1f127423765c72`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
