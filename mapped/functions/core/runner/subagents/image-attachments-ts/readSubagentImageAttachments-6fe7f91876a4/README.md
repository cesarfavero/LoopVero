# `readSubagentImageAttachments`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/image-attachments.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/image-attachments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533503-533530](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533503-L533530) | `FunctionDeclaration` | sim | `{   ctx,   box,   boxId,   attachments,   readStore: readStore2 }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533503-533530](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533503-L533530) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:533503

Chamadas escritas diretamente neste corpo: `images.map`, `readBoundBoxImages`.

SHA-256 do trecho: `8474b235e28b0523eaaa7eabfd63537a0f073d502c6c39e2bf762e713fd61a47`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
