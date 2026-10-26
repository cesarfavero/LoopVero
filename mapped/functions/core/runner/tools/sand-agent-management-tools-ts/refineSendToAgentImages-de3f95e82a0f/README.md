# `refineSendToAgentImages`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-agent-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:757323-757333](../../../../../../../reference/runtime/host-main.cjs#L757323-L757333) | `FunctionDeclaration` | não | `value, ctx` |
| [evaluation:543346-543356](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543346-L543356) | `FunctionDeclaration` | não | `value, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757323-757333](../../../../../../../reference/runtime/host-main.cjs#L757323-L757333) | 1 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:543346-543356](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543346-L543356) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:757323

Chamadas escritas diretamente neste corpo: `.entries`, `ctx.addIssue`, `isValidAttachmentUrl`.

SHA-256 do trecho: `4e7b0b5824702b8e07055f5ebedf8773dcd69bda4cbea3d85b1482d8328e9e44`.

### evaluation:543346

Chamadas escritas diretamente neste corpo: `.entries`, `ctx.addIssue`, `isValidAttachmentUrl`.

SHA-256 do trecho: `54af9031b568fe17af79ec1e3f2670ff3eef4e0837f6ca7b2a8897cd483b46ed`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
