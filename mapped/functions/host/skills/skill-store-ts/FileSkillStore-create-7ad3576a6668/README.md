# `FileSkillStore.create`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `host/skills/skill-store.ts` · [README do módulo](../../../../../modules/host/skills/skill-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721067-721084](../../../../../../reference/runtime/host-main.cjs#L721067-L721084) | `method` | não | `spec, provenance` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721067-721084](../../../../../../reference/runtime/host-main.cjs#L721067-L721084) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:721067

Chamadas escritas diretamente neste corpo: `clampSkillBody`, `clampSkillName`, `this.createAutomation`, `this.library.create`, `this.skillFromRecord`.

SHA-256 do trecho: `b448ed54cf5cefc9bc019863c5ef9f544c39cee39cbd4761728def5edfb9a7f7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
