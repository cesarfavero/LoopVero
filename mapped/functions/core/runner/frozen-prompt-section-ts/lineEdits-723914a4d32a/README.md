# `lineEdits`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/frozen-prompt-section.ts` · [README do módulo](../../../../../modules/core/runner/frozen-prompt-section-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:530651-530679](../../../../../../reference/runtime/sand-eval-runner.cjs#L530651-L530679) | `FunctionDeclaration` | não | `before, after` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530651-530679](../../../../../../reference/runtime/sand-eval-runner.cjs#L530651-L530679) | 4 | 5 | 0 | 2 | 0 | 0 |

### evaluation:530651

Chamadas escritas diretamente neste corpo: `Array.from`, `Math.max`, `edits.push`.

Alvos de atribuição ou incremento: `i`, `i2`, `j2`, `j3`, `lcs[computed][computed]`.

SHA-256 do trecho: `dde15b2cbd49d18b08822471c38ce470c9e1ca33857820d1ea38fde5a37325a6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
