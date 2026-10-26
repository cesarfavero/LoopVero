# `parseSandToolInputSchema`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/frozen-prompts/frozen-prompt.ts` · [README do módulo](../../../../../modules/core/frozen-prompts/frozen-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:537287-537290](../../../../../../reference/runtime/sand-eval-runner.cjs#L537287-L537290) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537287-537290](../../../../../../reference/runtime/sand-eval-runner.cjs#L537287-L537290) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:537287

Chamadas escritas diretamente neste corpo: `toolInputSchema.safeParse`.

SHA-256 do trecho: `515edf34d1556fb7c47470658d37f8c6cbdd32556f6633257ff2299ed6c9567e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
