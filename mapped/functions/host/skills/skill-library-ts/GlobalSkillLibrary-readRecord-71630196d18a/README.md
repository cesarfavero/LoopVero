# `GlobalSkillLibrary.readRecord`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `host/skills/skill-library.ts` · [README do módulo](../../../../../modules/host/skills/skill-library-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684629-684656](../../../../../../reference/runtime/host-main.cjs#L684629-L684656) | `method` | não | `id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684629-684656](../../../../../../reference/runtime/host-main.cjs#L684629-L684656) | 2 | 0 | 0 | 3 | 0 | 2 |

### host:684629

Chamadas escritas diretamente neste corpo: `Date.now`, `Math.floor`, `parseSkillFile`, `readSandDataFileSync`, `reportFallbackUnlessAbsent`, `this.listHelperScripts`, `this.path`.

Alvos de atribuição ou incremento: `createdAt`, `raw`.

SHA-256 do trecho: `2f367a15055dcf5ea0dd6b8514d00577d43c414336c42e9ada182f1589a273af`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
