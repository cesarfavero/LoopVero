# `FileSkillStore.importLiveSource`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `host/skills/skill-store.ts` · [README do módulo](../../../../../modules/host/skills/skill-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721177-721185](../../../../../../reference/runtime/host-main.cjs#L721177-L721185) | `method` | não | `source, fallbackName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721177-721185](../../../../../../reference/runtime/host-main.cjs#L721177-L721185) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:721177

Chamadas escritas diretamente neste corpo: `clampSkillName`, `deriveSkillNameFromUrl`, `liveSkillSpecFromSource`, `source.trim`, `this.library.create`.

SHA-256 do trecho: `7a293065786f7a664442bf34e062912b5df7b355ec53748b5250a6703b2dc6a5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
