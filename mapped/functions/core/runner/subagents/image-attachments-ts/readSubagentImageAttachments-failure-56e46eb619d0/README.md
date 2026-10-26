# `readSubagentImageAttachments/failure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/image-attachments.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/image-attachments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533516-533519](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533516-L533519) | `ArrowFunctionExpression` | não | `path33, _reason, cause` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533516-533519](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533516-L533519) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:533516 usa retorno implícito de arrow function.

### evaluation:533516

Chamadas escritas diretamente neste corpo: `new SandImageAttachmentError`, `unreadableImageAttachment`.

SHA-256 do trecho: `bfce50456884b9e031ee5c4e2175ce8b8c87ae418fbb005fac9119f17dd8eb74`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
