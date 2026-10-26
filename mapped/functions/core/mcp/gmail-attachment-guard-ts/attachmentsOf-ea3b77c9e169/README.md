# `attachmentsOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-attachment-guard.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-attachment-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584276-584285](../../../../../../reference/runtime/sand-eval-runner.cjs#L584276-L584285) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584276-584285](../../../../../../reference/runtime/sand-eval-runner.cjs#L584276-L584285) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:584276

Chamadas escritas diretamente neste corpo: `Array.isArray`, `args.args.arguments.toJson`, `args.args.attachments.toJson`, `list.flatMap`.

SHA-256 do trecho: `0b30e20498addbaca2f16150c9c53b973820ab01c89d7c5af1a7b7ad7d7c8d8d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
