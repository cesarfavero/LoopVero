# `normalizeInstructionList`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `shared/auto-review/sand-auto-review-instructions.ts` · [README do módulo](../../../../../modules/shared/auto-review/sand-auto-review-instructions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:687324-687345](../../../../../../reference/runtime/host-main.cjs#L687324-L687345) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687324-687345](../../../../../../reference/runtime/host-main.cjs#L687324-L687345) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:687324

Chamadas escritas diretamente neste corpo: `Array.isArray`, `clampInstruction`, `new Set`, `result.push`, `seen.add`, `seen.has`.

SHA-256 do trecho: `9333c8167feee66a6604cdbd45b908da6f8666a4330932bf71c3f178ef405eb5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
