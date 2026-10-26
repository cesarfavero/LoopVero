# `GlobalSkillLibrary.listHelperScripts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `host/skills/skill-library.ts` · [README do módulo](../../../../../modules/host/skills/skill-library-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684615-684624](../../../../../../reference/runtime/host-main.cjs#L684615-L684624) | `method` | não | `id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684615-684624](../../../../../../reference/runtime/host-main.cjs#L684615-L684624) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:684615

Chamadas escritas diretamente neste corpo: `.map`, `.sort`, `entries.filter`, `reportFallbackUnlessAbsent`, `this.folder`.

Alvos de atribuição ou incremento: `entries`.

SHA-256 do trecho: `c709ce6f3119f09dabc38a48d93e0b01844a8daa1aa4fd3c5a6d210b4af1d7fa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
