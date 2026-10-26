# `parsePromptPrefixSnapshotJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-prefix-snapshot.ts` · [README do módulo](../../../../../modules/core/runner/prompt-prefix-snapshot-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:717216-717225](../../../../../../reference/runtime/host-main.cjs#L717216-L717225) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717216-717225](../../../../../../reference/runtime/host-main.cjs#L717216-L717225) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:717216

Chamadas escritas diretamente neste corpo: `JSON.parse`, `parsePromptPrefixSnapshot`.

Alvos de atribuição ou incremento: `parsed2`.

SHA-256 do trecho: `e0a689a55dc0f3157124370d5f0027673de58f2664ee1b360770cd16a5908233`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
