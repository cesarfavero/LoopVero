# `selectHostVariant`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/frozen-prompts/frozen-prompt.ts` · [README do módulo](../../../../../modules/core/frozen-prompts/frozen-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:537343-537372](../../../../../../reference/runtime/sand-eval-runner.cjs#L537343-L537372) | `FunctionDeclaration` | não | `frozenPromptId, files, variants, host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537343-537372](../../../../../../reference/runtime/sand-eval-runner.cjs#L537343-L537372) | 5 | 2 | 0 | 2 | 2 | 0 |

### evaluation:537343

Chamadas escritas diretamente neste corpo: `.filter`, `.split`, `JSON.stringify`, `Object.entries`, `hostOfVariant`, `names3.find`, `names3.join`, `new Error`, `new Set`, `order.join`, `removed.add`, `sameHost`, `shard.endsWith`, `shard.slice`, `variants.get`, `variants.keys`.

Alvos de atribuição ou incremento: `composed[computed]`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `e87dbb40d15f3f50da7168bed4ddfd4a8f6e97115f1c344134a8ed23f1c18b16`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
