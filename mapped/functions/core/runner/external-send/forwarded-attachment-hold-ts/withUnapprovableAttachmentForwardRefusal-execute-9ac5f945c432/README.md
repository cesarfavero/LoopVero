# `withUnapprovableAttachmentForwardRefusal/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/external-send/forwarded-attachment-hold.ts` · [README do módulo](../../../../../../modules/core/runner/external-send/forwarded-attachment-hold-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583674-583693](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583674-L583693) | `FunctionExpression` | sim | `ctx, args, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583674-583693](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583674-L583693) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:583674

Chamadas escritas diretamente neste corpo: `executor.execute`, `heldCallOf`, `hold`, `new McpResult`, `new McpSuccess`, `new McpTextContent`, `new McpToolResultContentItem`, `recordMcpExecRefusedBeforeDispatch`.

SHA-256 do trecho: `ca7500d5202f8bf59d6bfddc80c6b39cab199aa3897b84f0f2481f85e6c0069c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
