# `refineCloudAgentAttachmentUrls`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-tool.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770174-770186](../../../../../../reference/runtime/host-main.cjs#L770174-L770186) | `FunctionDeclaration` | não | `value, ctx` |
| [evaluation:567770-567782](../../../../../../reference/runtime/sand-eval-runner.cjs#L567770-L567782) | `FunctionDeclaration` | não | `value, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770174-770186](../../../../../../reference/runtime/host-main.cjs#L770174-L770186) | 1 | 2 | 0 | 0 | 0 | 0 |
| [evaluation:567770-567782](../../../../../../reference/runtime/sand-eval-runner.cjs#L567770-L567782) | 1 | 2 | 0 | 0 | 0 | 0 |

### host:770174

Chamadas escritas diretamente neste corpo: `.entries`, `ctx.addIssue`, `posixPathFromFileUrl`.

SHA-256 do trecho: `c0cbd3f6d81122bb35e64220a4bf0726d4c64317933fa7dff776c4bf3300cc3c`.

### evaluation:567770

Chamadas escritas diretamente neste corpo: `.entries`, `ctx.addIssue`, `posixPathFromFileUrl`.

SHA-256 do trecho: `fb6762fb7c2090722f443c3747a1a252c216e32f97fb1e93838ae1c9a3b013e5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
