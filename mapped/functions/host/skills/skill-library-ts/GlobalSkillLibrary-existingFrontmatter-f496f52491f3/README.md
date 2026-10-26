# `GlobalSkillLibrary.existingFrontmatter`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `host/skills/skill-library.ts` · [README do módulo](../../../../../modules/host/skills/skill-library-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684712-684721](../../../../../../reference/runtime/host-main.cjs#L684712-L684721) | `method` | não | `id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684712-684721](../../../../../../reference/runtime/host-main.cjs#L684712-L684721) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:684712

Chamadas escritas diretamente neste corpo: `parseSkillFile`, `readSandDataFileSync`, `reportFallbackUnlessAbsent`, `this.path`.

Alvos de atribuição ou incremento: `raw`.

SHA-256 do trecho: `8ec0c97608b87a39b1774ad17fb0875d1625945c4a528b53f7e6e698cb42bd2e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
