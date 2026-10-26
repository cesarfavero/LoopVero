# `GlobalSkillLibrary.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `host/skills/skill-library.ts` · [README do módulo](../../../../../modules/host/skills/skill-library-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684567-684577](../../../../../../reference/runtime/host-main.cjs#L684567-L684577) | `method` | não | `libraryDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684567-684577](../../../../../../reference/runtime/host-main.cjs#L684567-L684577) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:684567

Chamadas escritas diretamente neste corpo: `createDebouncePolicy`, `new WatchedDirectory`, `this.renameLegacyRecipeFiles`.

Alvos de atribuição ou incremento: `this.dir`, `this.libraryDir`.

SHA-256 do trecho: `efe9633ac1b66a987388f9ed757fad5f36f605b064ab1ca3cb35b42340c55626`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
