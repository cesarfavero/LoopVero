# `composeToolName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-attachment-guard.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-attachment-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584269-584272](../../../../../../reference/runtime/sand-eval-runner.cjs#L584269-L584272) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584269-584272](../../../../../../reference/runtime/sand-eval-runner.cjs#L584269-L584272) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:584269

Chamadas escritas diretamente neste corpo: `COMPOSE_TOOLS.find`, `args.name.lastIndexOf`, `args.name.slice`.

SHA-256 do trecho: `fea5c9a5cce78c2bebf8a90ef0595f3ce90225b2bd16ca66a64ff32104bdbb15`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
